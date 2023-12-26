function displayRecipes(recipes) {
  const recipeSectionEl = document.querySelector(".recipe-section");
  recipeSectionEl.innerHTML = "";
  const recipeNumEl = document.querySelector(".filters-section__recipes-found");
  recipeNumEl.textContent = `${recipes.length} Recette${recipes.length > 1 ? "s" : ""}`;
  if (recipes.length === 0) {
    recipeSectionEl.innerHTML = `Aucune recette ne contient 
        ‘${document.querySelector(".main-search-bar input").value}’ 
        vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
  } else {
    recipes.forEach((item) => recipeSectionEl.append(item.domCard));
  }
}


export { displayRecipes };
