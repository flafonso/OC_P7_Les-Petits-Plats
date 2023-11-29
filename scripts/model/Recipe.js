class Recipe {
  constructor(
    id,
    image,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.servings = servings;
    this.ingredients = ingredients;
    this.time = time;
    this.description = description;
    this.appliance = appliance;
    this.ustensils = ustensils;
  }
  static create(data) {
    return new Recipe(
      data.id,
      data.image,
      data.name,
      data.servings,
      data.ingredients,
      data.time,
      data.description,
      data.appliance,
      data.ustensils
    );
  }

  get src() {
    return `assets/recipe_images/${this.image}`;
  }

  get domList() {
    const listEl = document.createElement("div");
    listEl.className = "recipe-card__list";
    this.ingredients.forEach(element => {
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
