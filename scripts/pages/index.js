import { recipes } from "../data/recipes.js";
import { Recipe } from "../model/Recipe.js";
import { extractOptions } from "../data/dataManagement.js";
import { displayRecipes } from "../templates/recipe.js";
import { initDropdown, calcDropWidth, setDropdownBtn } from "../templates/dropdown.js";
import { searchRecipes, filterRecipes } from "../data/search.js";

export let recipesFind = { list: [] };
export let filters = { ingredients: [] , appliances: [] , ustensils: []};
const dropdownList = document.querySelectorAll(".dropdown");

function main(recipes) {
  // Search for options relating to recipes found
  const options = extractOptions(recipes);

  // Initialise the list of dropdown options and all the events that go with them
  initDropdown(dropdownList[0], options.ingredients, "ingredients");
  initDropdown(dropdownList[1], options.appliances, "appliances");
  initDropdown(dropdownList[2], options.ustensils, "ustensils");
  displayRecipes(recipes);
}

function init() {
  const recipeItems = recipes.map((recipe) => new Recipe(recipe));
  recipesFind.list = recipeItems;

  // Calculate dropdown width
  calcDropWidth(dropdownList);
  // Update dropdown width on window resize
  window.addEventListener("resize", () => calcDropWidth(dropdownList));
  setDropdownBtn(dropdownList[0]);
  setDropdownBtn(dropdownList[1]);
  setDropdownBtn(dropdownList[2]);

  main(recipesFind.list);
  document
  .querySelector(".main-search-bar input").addEventListener("input", () => {
    // Search for recipes that match the search text
    recipesFind.list = searchRecipes(recipeItems);
    filterRecipes();
    });
}

init();

export { main };