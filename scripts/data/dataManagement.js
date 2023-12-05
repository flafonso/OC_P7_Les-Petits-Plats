import { Recipe } from "../model/Recipe.js";

function filterRecipes(recipesData) {
  return recipesData;
}

function refineTagList(rawTagList) {
  let tagList = [...new Set(rawTagList)];

  tagList = tagList.map((tag) => {
    return tag[0].toUpperCase() + tag.toLowerCase().slice(1);
  });
  return tagList.sort();
}

function getRecipesData(recipes) {
  const [recipeItems, rawIngrTags, rawAppTags, rawUstTags] =
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
  const ingrTags = refineTagList(rawIngrTags);
  const appTags = refineTagList(rawAppTags);
  const ustTags = refineTagList(rawUstTags);

  return { recipeItems, ingrTags, appTags, ustTags };
}

export { getRecipesData, filterRecipes };