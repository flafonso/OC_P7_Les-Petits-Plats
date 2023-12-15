class Recipe {
  constructor(data) {
    this.id = data.id;
    this.image = data.image;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;
    this.ustensils = data.ustensils;

    this.lowerIngredients = [...data.ingredients.map((content) => content.ingredient.toLowerCase()),];
    this.lowerAppliance = data.appliance.toLowerCase();
    this.lowerUstensils = data.ustensils.map((ustensil) => ustensil.toLowerCase());
    this.lowerDescription = data.description.toLowerCase();
  }

  get src() {
    return `assets/recipe_images/${this.image}`;
  }

  get domList() {
    const listEl = document.createElement("div");
    listEl.className = "recipe-card__list";
    this.ingredients.forEach((element) => {
      const ingredientEl = document.createElement("div");
      ingredientEl.className = "recipe-card__ingredient";

      const nameEl = document.createElement("p");
      nameEl.className = "name";
      nameEl.textContent = element.ingredient;
      ingredientEl.append(nameEl);
      if (element.hasOwnProperty("quantity")) {
        const quantityEl = document.createElement("p");
        quantityEl.className = "quantity";
        quantityEl.textContent = element.quantity.toString();
        if (element.hasOwnProperty("unit")) {
          quantityEl.textContent = quantityEl.textContent + element.unit;
        }
        ingredientEl.append(quantityEl);
      }
      listEl.append(ingredientEl);
    });
    return listEl.outerHTML;
  }

  get domCard() {
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.innerHTML = `
        <div class="recipe-card__time">${this.time}min</div>
        <div class="recipe-card__img">
          <img src="${this.src}" alt="Image recette de ${this.name}" />
        </div>
        <div class="recipe-card__content">
          <h2 class="recipe-card__name">${this.name}</h2>
          <h3 class="recipe-card__subtitle">
            RECETTE
          </h3>
          <div class="recipe-card__recipe">
            <p>${this.description}</p>
          </div>
          <h3 class="recipe-card__subtitle">
            INGRÉDIENT
          </h3>
          ${this.domList}
        </div>
    `;
    return card;
  }
}

export { Recipe };
