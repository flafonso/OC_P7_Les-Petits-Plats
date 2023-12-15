
function extractOptions(recipesFind) {
  const [ rawIngredients, rawAppliances, rawUstensils] =
  recipesFind.reduce(
      (acc, recipe) => {
        acc[0].push(...recipe.lowerIngredients);
        acc[1].push(recipe.lowerAppliance);
        acc[2].push(...recipe.lowerUstensils);
        return acc;
      },
      [[], [], []]
    );
  const ingredients = [...new Set(rawIngredients)].sort();
  const appliances = [...new Set(rawAppliances)].sort();
  const ustensils = [...new Set(rawUstensils)].sort();

  return { ingredients, appliances, ustensils };
}

export { extractOptions };