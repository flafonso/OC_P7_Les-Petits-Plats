import { initAllDropdown } from "../templates/dropdown.js";
import { recipesTemplates } from "../templates/recipe.js";
import { recipes } from "../data/recipes.js";


function init() {
  const recipesModel = recipesTemplates(recipes);
  initAllDropdown(recipesModel);
  recipesModel.displayRecipes();
}


init();