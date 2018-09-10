import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
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
            <a class="results__link" href="#${recipe.recipe_ID}">
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

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};