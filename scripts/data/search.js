import { main, recipesFind, filters } from "../pages/index.js";

function searchOptions(optionsList, searchStr) {
  const optionsFind = optionsList.filter((option) => option.includes(searchStr));
  return optionsFind;
}

function searchRecipes(recipeItems) {
  const searchStr = document.querySelector(".main-search-bar input").value.toLowerCase();
  const recipesMatch = recipeItems.filter((recipe) =>
    recipe.lowerName.includes(searchStr) ||
    recipe.lowerDescription.includes(searchStr) ||
    recipe.lowerIngredients.some((ingredient) => ingredient.includes(searchStr))
  );
  return recipesMatch;
}

function filterRecipes() {
  const newRecipesMatch = recipesFind.list.filter((recipe) => 
    filters.ingredients.every(ingredient => recipe.lowerIngredients.includes(ingredient)) &&
    filters.appliances.every(ingredient => recipe.lowerAppliance.includes(ingredient)) &&
    filters.ustensils.every(ingredient => recipe.lowerUstensils.includes(ingredient))
  );
  main(newRecipesMatch);
}

export { searchRecipes, searchOptions, filterRecipes };