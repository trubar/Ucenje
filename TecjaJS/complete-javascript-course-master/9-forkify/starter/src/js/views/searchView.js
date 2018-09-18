import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};
 
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}

// 'pasta with tomato and spinach'
/**
 * previous: 0 / previous + current.length = 5 / newTitle = ['pasta']
 * previous: 5 / previous + current.length = 9 / newTitle = ['pasta', 'with']
 * previous: 9 / previous + current.length = 15 / newTitle = ['pasta', 'with', 'tomato']
 * previous: 15 / previous + current.length = 18 / newTitle = ['pasta', 'with', 'tomato', 'and']
 * previous: 18 / previous + current.length = 18 / newTitle = ['pasta', 'with', 'tomato', 'and', 'spinach']
 */
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((previous, current) => {
            if (previous + current.length <= limit) {
                newTitle.push(current);
            }
            return previous + current.length;
        }, 0);
        // return the result
        return `${newTitle.join(' ')} ...`
    }
    return title;
};

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

// type: prev or next
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page -1 : page + 1}>
        <span>Page ${type === 'prev' ? page -1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if (page === 1 && pages > 1){
        // samo gumb za naprej
        button = createButton(page, 'next');
    } else if (page < pages) {
        // oba gumba
        button = `
        ${createButton(page, 'next')}
        ${createButton(page, 'prev')}
        `;
    } else if (page === pages && pages > 1) {
        // samo gumb za nazaj
        button = createButton(page, 'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // render zadetke za trenutno stran
    const start = (page -1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    // render gumbe za strani
    renderButtons(page, recipes.length, resPerPage);
};