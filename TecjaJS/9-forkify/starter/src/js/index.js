import Search from "./models/Search";
import Recipe from "./models/Recipe";
import List from "./models/List";
import Likes from "./models/Likes";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import * as listView from "./views/listView";
import * as likesView from "./views/likesView";
import { elements, renderLoader, clearLoader } from "./views/base";

/**
 * Global stanje aplikacije
 * - Search object
 * - Current recpie object
 * - Shoping list object
 * - liked object
 */
const state = {};
// window.state = state;

/**
 *  SEARCH CONTROLER
 */
const controlSearch = async () => {
  // 1. Get query from the view
  const query = searchView.getInput();

  if (query) {
    // 2. New search object and add ta state
    state.search = new Search(query);

    // 3. Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
      // 4. Search for recipies
      await state.search.getResults(); // ker je await moram zgoraj funkcijo narediti async

      // 5. Render results on UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (err) {
      alert("Nekaj je narobe iz iskanjem... Verjetno je limit...");
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

/**
 * RECIPE CONTROLER
 */
const controlRecipe = async () => {
  // Dobim ID iz url
  const id = window.location.hash.replace("#", "");
  // console.log(id);

  if (id) {
    // Pripravi UI na spremembe
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // Osvetli izbrani recept
    if (state.search) searchView.highlightSelected(id);

    // Ustvari objekt recept
    state.recipe = new Recipe(id); //id dobim zgoraj iz url, nato ustvarim objekt iz Recipe.js

    try {
      // Pridobi podatke recepta in uredi sestavine
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // Preračunaj čas in število postrežb
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Izpiši recept
      clearLoader();
      recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
    } catch (err) {
      console.log(err);
      alert("Ne morem izpisati recepta brez podatkov!");
    }
  }
};

/* window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe); */
["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controlRecipe)
);

/**
 * LIST CONTROLLER
 */

const controlList = () => {
  // če se ni seznama ga ustvari
  if (!state.list) state.list = new List();

  // dodaj sestavine iz recepte in UI
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

// Upravljaj iz posodabljanjem in brisanjem posameznih sestavin
elements.shopping.addEventListener("click", e => {
  const id = e.target.closest(".shopping__item").dataset.itemid; //.dataset.itemid pride iz listView vrstica 5 (...data-itemid=${item.id})

  // gumb delete
  if (e.target.matches(".shopping__delete, .shopping__delete *")) {
    // izbrišem iz state
    state.list.deleteItem(id);

    // izbrišem iz UI
    listView.deleteItem(id);

    // uredi še count sestavine
  } else if (e.target.matches(".shopping__count-value")) {
    // dadaj še da ne more iti v -1...
    const val = parseFloat(e.target.value, 10);
    state.list.updateCount(id, val);
  }
});

/**
 * LIKE CONTROLER
 */

const controlLike = () => {
  if (!state.likes) state.likes = new Likes();
  const currentID = state.recipe.id;

  // Uporabnik še NI všečkal trenutnega recepta (večja vrejetnost)
  if (!state.likes.isLiked(currentID)) {
    // Dodaj like v state
    const newLike = state.likes.addLike(
      currentID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );
    // Pritisni like gumb
    likesView.toggleLikeBtn(true);

    // Dodaj like v UI
    likesView.renderLike(newLike);

    // Uporabnik JE že všečkal trenutnega recepta
  } else {
    // Odstrani like iz state
    state.likes.deleteLike(currentID);
    // Ugasni like gumb
    likesView.toggleLikeBtn(false);

    // Odstrani like v UI
  }
  likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Postvi like od recptov, ko se stran naloži
window.addEventListener('load', () => {
  state.likes = new Likes();

  // Restore likes
  state.likes.readStorage();

  // Toggle like menu button
  likesView.toggleLikeMenu(state.likes.getNumLikes());

  // render the existing likes
  state.likes.likes.forEach(like => likesView.renderLike(like));
});


// upravljanje iz kliki gumbov za recep
elements.recipe.addEventListener("click", e => {
  if (e.target.matches(".btn-dec, .btn-dec *")) {
    // btn-dec gumb je bil kliknen
    if (state.recipe.servings > 1) {
      state.recipe.updateServings("dec");
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches(".btn-inc, .btn-inc *")) {
    // btn-inc gumb je bil kliknen
    state.recipe.updateServings("inc");
    recipeView.updateServingsIngredients(state.recipe);
  } else if (e.target.matches(".recipe__btn--add, .recipe__btn--add *")) {
    // dodaj sestavine na napkupovalni seznam
    controlList();
  } else if (e.target.matches(".recipe__love, .recipe__love *")) {
    // like kontroler
    controlLike();
  }
});

// window.l = new List();
