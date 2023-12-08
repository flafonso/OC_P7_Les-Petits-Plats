import { Recipe } from "../model/Recipe.js";

function filterRecipes(recipesData) {
  return recipesData.recipeItems;
}

function getRecipesData(recipes) {
  const [recipeItems, allRawIngredients, allRawAppliance, allRawUstensils] =
    recipes.reduce(
      (acc, recipe) => {
        const recipeModel = new Recipe(recipe);
        acc[0].push(recipeModel);
        acc[1].push(...recipeModel.lowerIngredients);
        acc[2].push(recipeModel.lowerAppliance);
        acc[3].push(...recipeModel.lowerUstensils);
        return acc;
      },
      [[], [], [], []]
    );
  const allIngredients = [...new Set(allRawIngredients)];
  const allAppliance = [...new Set(allRawAppliance)];
  const allUstensils = [...new Set(allRawUstensils)];

  return { recipeItems, allIngredients, allAppliance, allUstensils };
}

export { getRecipesData, filterRecipes };