import { recipesFind, filters } from "../pages/index.js";

function searchOptions(optionsList, searchStr) {
  let optionsFind = optionsList;
  return optionsFind;
}

function searchRecipes(recipeItems) {
  const searchStr = document.querySelector(".main-search-bar input").value.toLowerCase();
  let recipesMatch = recipeItems;
  return recipesMatch;
}

function filterRecipes() {
}

export { searchRecipes, searchOptions, filterRecipes };