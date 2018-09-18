import axios from 'axios';
import {
  key,
  proxy
} from '../config';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.image_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
      // console.log(res); 
    } catch (error) {
      console.log(error);
      alert('Nekaj je šlo narobe :(');
    }
  };

  calcTime() {
    // Predvidevam da potrebujem 15 min za vsake 3 sestavine
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    this.time = periods * 15;
  };

  calcServings() {
    this.servings = 4;
  };

  parseIngredients() {
    const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
    const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
    const units = [...unitsShort, 'kg', 'g'];

    const newIngredients = this.ingredients.map(el => {
        // 1. enote na skupni imenovalec
        let ingredient = el.toLowerCase();
        unitsLong.forEach((unit, i) => {
            ingredient = ingredient.replace(unit, unitsShort[i]);
        });

        // 2. Odstrani oklepaje (poguglaj)
        ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

        // 3. Razdeli sestavine v število, enoto mere in sestavino (3 cup diced fresh red, yellow and green bell peppers -> 3, cup, diced ...)
        const arrIng = ingredient.split(' ');
        const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

        let objIng;
        if (unitIndex > -1) {
            // Pomemeni da obstaja enota mere
            // primer: 4 1/2 cups, arrCount je [4, 1/2] --> eval("4+1/2") --> 4.5
            // primer: 4 cups, arrCOunt [4]
            const arrCount = arrIng.slice(0, unitIndex);
            
            let count;
            if (arrCount.length === 1) {
                count = eval(arrIng[0].replace('-', '+')); // .replace ('-' with '+') zato da lahko pretvorim 4-1/2 v 4.5
            } else {
                count = eval(arrIng.slice(0, unitIndex).join('+')); // razlaga zgoraj
            }

            objIng = {
                count,
                unit: arrIng[unitIndex],
                ingredient: arrIng.slice(unitIndex + 1).join(' ')
            };

        } else if (parseInt(arrIng[0], 10)) {
            // Ni enote mere, ampak prvi element je število npr: one bread
            objIng = {
                count: parseInt(arrIng[0], 10),
                unit: '',
                ingredient: arrIng.slice(1).join(' ')
            }
        } else if (unitIndex === -1) {
            // Ni enote mere in ni števila na prvi poziciji
            objIng = {
                count: 1,
                unit: '',
                ingredient
            }
        }

        return objIng;
    });
    this.ingredients = newIngredients;
}

  
};