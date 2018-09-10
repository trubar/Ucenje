import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/**
 * Global stanje aplikacije
 * - Search object
 * - Current recpie object
 * - Shoping list object
 * - liked object
 */
const state = {};

const controlSearch = async () => {
  // 1. Get query from the view
  const query = searchView.getInput();
  
  if (query){
    // 2. New search object and add ta state
    state.search = new Search(query);

    // 3. Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();

    // 4. Search for recipies
    await state.search.getResults(); // ker je await moram zgoraj funkcijo narediti async

    // 5. Render results on UI
    searchView.renderResults(state.search.result);
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});