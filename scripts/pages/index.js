import { recipes } from "../data/recipes.js";
import { Recipe } from "../model/Recipe.js";
import { extractOptions } from "../data/dataManagement.js";
import { displayRecipes } from "../templates/recipe.js";
import { initDropdown, calcDropWidth } from "../templates/dropdown.js";
import { searchRecipes } from "../data/search.js";

export let recipesFind = { list: [] };
export let filters = { ingredients: [] , appliances: [] , ustensils: []};

function main(recipeItems, dropdownList) {
  // Search for recipes that match the search text
  recipesFind.list = searchRecipes(recipeItems);
  // Search for options relating to recipes found
  const options = extractOptions(recipesFind.list);

  // Initialise the list of dropdown options and all the events that go with them
  initDropdown(dropdownList[0], options.ingredients, "ingredients");
  initDropdown(dropdownList[1], options.appliances, "appliances");
  initDropdown(dropdownList[2], options.ustensils, "ustensils");
  displayRecipes(recipesFind.list);
}

function init() {
  const recipeItems = recipes.map((recipe) => new Recipe(recipe));
  const dropdownList = document.querySelectorAll(".dropdown");

  console.log("[0] recipesFind", recipesFind.list);
  recipesFind.list = recipeItems;

  // Calculate dropdown width
  calcDropWidth(dropdownList);
  // Update dropdown width on window resize
  window.addEventListener("resize", () => calcDropWidth(dropdownList));

  main(recipeItems, dropdownList);
  console.log("[1] recipesFind", recipesFind.list);
  document
  .querySelector(".main-search-bar input").addEventListener("input", () => {
    main(recipeItems, dropdownList);
    console.log("[2] recipesFind", recipesFind.list);
    });
}

init();
