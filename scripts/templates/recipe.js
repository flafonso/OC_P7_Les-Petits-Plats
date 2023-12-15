function displayRecipes(recipes) {
  const recipeSectionEl = document.querySelector(".recipe-section");
  recipeSectionEl.innerHTML = "";
  const recipeNumEl = document.querySelector(".filters-section__recipes-found");
  recipeNumEl.textContent = `${recipes.length} Recettes`;

  recipes.forEach((item) => recipeSectionEl.append(item.domCard));
}


export { displayRecipes };
