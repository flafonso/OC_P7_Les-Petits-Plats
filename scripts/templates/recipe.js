

function displayRecipes(recipesData) {
  const recipeSectionEl = document.querySelector(".recipe-section");
  recipeSectionEl.innerHTML = "";

  recipesData.recipeItems.forEach((item) => recipeSectionEl.append(item.domCard));
}


export { displayRecipes };
