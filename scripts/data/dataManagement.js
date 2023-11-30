import { Recipe } from "../model/Recipe.js";

function filterRecipes(recipesData) {
  return recipesData;
}

function getRecipesData(recipes) {
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
  const uniqIngrTag = [...new Set(ingrTag)];
  const uniqAppTag = [...new Set(appTag)];
  const uniqUstTag = [...new Set(ustTag)];

  return { recipeItems, uniqIngrTag, uniqAppTag, uniqUstTag };
}

export { getRecipesData, filterRecipes };