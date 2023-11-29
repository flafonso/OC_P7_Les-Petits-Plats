import { Recipe } from "../model/Recipe.js";

function recipesTemplates(recipes) {
  // const recipeItems = recipes.map((recipe) => Recipe.create(recipe));
  const [recipeItems, ingrTag, appTag, ustTag] =
    recipes.reduce(
      (acc, recipe) => {
        acc[0].push(Recipe.create(recipe));
        acc[1].push(...recipe.ingredients.map((content) => content.ingredient));
        acc[2].push(recipe.appliance);
        acc[3].push(...recipe.ustensils);
        return acc;
      },
      [[], [], [], []]
    );
  // console.log("recipeItems", recipeItems);

  const uniqIngrTag = [...new Set(ingrTag)];
  const uniqAppTag = [...new Set(appTag)];
  const uniqUstTag = [...new Set(ustTag)];
  // console.log("uniqIngrTag", uniqIngrTag);
  // console.log("uniqAppTag", uniqAppTag);
  // console.log("uniqUstTag", uniqUstTag);


  function sortRecipes() {}

  function displayRecipes() {
    const recipeSectionEl = document.querySelector(".recipe-section");
    recipeSectionEl.innerHTML = "";

    recipeItems.forEach((item) => recipeSectionEl.append(item.domCard));
  }
  return { uniqIngrTag, uniqAppTag, uniqUstTag, displayRecipes };
}

export { recipesTemplates };
