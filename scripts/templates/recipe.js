import { Recipe } from "../model/Recipe.js";

function recipesTemplates(recipes) {
  const recipeItems = recipes.map((recipe) => Recipe.create(recipe));

  function displayRecipes() {
    const recipeSectionEl = document.querySelector(".recipe-section");
    recipeSectionEl.innerHTML = "";

    recipeItems.forEach((item) => recipeSectionEl.append(item.domCard));
  }
  return { displayRecipes };
}

export { recipesTemplates };
