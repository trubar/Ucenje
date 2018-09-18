import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
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
      alert('Nekaj ne dela :)');
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
  const id = window.location.hash.replace('#', '');
  console.log(id);

  if (id) {
    // Pripravi UI na spremembe

    // Ustvari objekt recept
    state.recipe = new Recipe(id); //id dobim zgoraj iz url, nato ustvarim objekt iz Recipe.js
    
    try {
      // Pridobi podatke recepta in uredi sestavine
      await state.recipe.getRecipe();
      state.recipe.parseIngridients();
  
      // Preračunaj čas in število postrežb
      state.calcTime()
  
      // Izpiši recept
      console.log(state.recipe);
    } catch (err) {
      alert('Ne morem izpisati recepta brez podatkov!')
    }
  }
}

/* window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe); */
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));