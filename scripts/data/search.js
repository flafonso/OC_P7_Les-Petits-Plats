import { main, recipesFind, filters } from "../pages/index.js";

function searchOptions(optionsList, searchStr) {
  let optionsFind = [];
  for (let i = 0; i < optionsList.length; i++) {
    if (optionsList[i].includes(searchStr)) {
      optionsFind.push(optionsList[i]);
    }
  }
  return optionsFind;
}

function inTheList(list, searchStr) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].includes(searchStr)) {
      return true;
    }
  }
  return false;
}

function searchRecipes(recipeItems) {
  const searchStr = document.querySelector(".main-search-bar input").value.toLowerCase();
  let recipesMatch = [];
  for (let i = 0; i < recipeItems.length; i++) {
    if (recipeItems[i].lowerName.includes(searchStr) ||
    recipeItems[i].lowerDescription.includes(searchStr) ||
    inTheList(recipeItems[i].lowerIngredients, searchStr)) {
      recipesMatch.push(recipeItems[i]);
    }
  }
  return recipesMatch;
}

function allInTheList(list, searchList) {
  for (let i = 0; i < searchList.length; i++) {
    let bool = false;
    for (let j = 0; j < list.length; j++) {
      if (list[j] === searchList[i]) {
        bool = true;
        break ;
      }
    }
    if (bool === false) {
      return bool;
    }
  }
  return true;
}

function filterRecipes() {
  let newRecipesMatch = [];
  for (let i = 0; i < recipesFind.list.length; i++) {
    if (allInTheList(recipesFind.list[i].lowerIngredients, filters.ingredients) &&
        allInTheList([recipesFind.list[i].lowerAppliance], filters.appliances) &&
        allInTheList(recipesFind.list[i].lowerUstensils, filters.ustensils)) {
      newRecipesMatch.push(recipesFind.list[i]);
    }
  }
  main(newRecipesMatch);
}

export { searchRecipes, searchOptions, filterRecipes };