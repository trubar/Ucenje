import Search from './models/Search';

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
  const query = 'pizza' //TODO
  
  if (query){
    // 2. New search object and add ta state
    state.search = new Search(query);

    // 3. Prepare UI for results

    // 4. Search for recipies
    await state.search.getResults(); // ker je await moram zgoraj funkcijo narediti async

    // 5. Render results on UI
    console.log(state.search.result)
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});