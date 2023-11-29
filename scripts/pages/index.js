import { initAllDropdown } from "../templates/dropdown.js";
import { recipesTemplates } from "../templates/recipe.js";
import { recipes } from "../data/recipes.js";


function init() {
  initAllDropdown();
  const recipesModel = recipesTemplates(recipes);
  recipesModel.displayRecipes();
}


init();