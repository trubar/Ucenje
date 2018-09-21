import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {
  elements,
  renderLoader,
  clearLoader
} from './views/base';

/**
 * Global stanje aplikacije
 * - Search object
 * - Current recpie object
 * - Shoping list object
 * - liked object
 */
const state = {};

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
      alert('Nekaj je narobe iz iskanjem... Verjetno je limit...');
      clearLoader();
    }
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
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
  const id = window.location.hash.replace('#', '');
  console.log(id);

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
      recipeView.renderRecipe(state.recipe);


    } catch (err) {
      console.log(err);
      alert('Ne morem izpisati recepta brez podatkov!');
    }
  }
}

/* window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe); */
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// upravljanje iz kliki gumbov za recep
elements.recipe.addEventListener('click', e => {
  if (e.target.matches('.btn-dec, .btn-dec *')) {
    // btn-dec gumb je bil kliknen
    if (state.recipe.servings > 1) {
      state.recipe.updateServings('dec');
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches('.btn-inc, .btn-inc *')) {
    // btn-inc gumb je bil kliknen
    state.recipe.updateServings('inc')
    recipeView.updateServingsIngredients(state.recipe);
  }
  console.log(state.recipe);
});