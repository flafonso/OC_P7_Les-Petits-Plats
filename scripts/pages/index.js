import { recipes } from "../data/recipes.js";
import { getRecipesData, filterRecipes } from "../data/dataManagement.js";
import { displayRecipes } from "../templates/recipe.js";
import { initAllDropdown } from "../templates/dropdown.js";


function init() {
  const recipesData = getRecipesData(recipes);
  initAllDropdown(recipesData);

  const filtRecipes = filterRecipes(recipesData)
  displayRecipes(filtRecipes);
}


init();