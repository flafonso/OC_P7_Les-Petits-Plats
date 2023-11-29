class DdComponents {
  constructor(dropdownEl) {
    this.ddEl = dropdownEl;
    this.ddBtn = dropdownEl.querySelector(".dropdown__btn");
    this.ddArrow = dropdownEl.querySelector(".dropdown__arrow");
    this.ddContent = dropdownEl.querySelector(".dropdown__content");
    this.ddSearch = dropdownEl.querySelector(".dropdown__search");
    this.ddOptions = dropdownEl.querySelector(".dropdown__options");
    this.ddOptionLst = Array.from(dropdownEl.querySelectorAll("li"));
  }
}

const ddListEl = Array.from(document.querySelectorAll(".dropdown"));

function openDropdown(ddCmpts) {
  // Little change of dropdown style when it's open
  ddCmpts.ddEl.classList.toggle("dropdown--open");
  // Show or hide options content
  ddCmpts.ddContent.classList.toggle("dropdown__content--visible");
  ddCmpts.ddArrow.classList.toggle("dropdown__arrow--rotate");
}

function calcDropWidth() {
  // console.log("ddListEl", ddListEl);
  ddListEl.forEach((dropdownEl) => {
    const dropdownBtnWidth = dropdownEl
      .querySelector(".dropdown__btn")
      .offsetWidth.toString();
    // console.log("dropdownBtnWidth", dropdownBtnWidth);
    // console.log("dropdownEl", dropdownEl);
    dropdownEl.style.width = `${dropdownBtnWidth}px`;
  });
}

function fillDropdowns(allTags) {
  for (let i = 0; i < 3; i++) {
    const lstTagsEl = allTags[i].map((tag) => {
      const liEl = document.createElement("li");
      liEl.textContent = tag
      return liEl;
    });
    ddListEl[i].querySelector(".dropdown__options").append(...lstTagsEl);
  }
}

function initAllDropdown(recipesModel) {
  calcDropWidth();
  window.addEventListener("resize", calcDropWidth);

  fillDropdowns([
    recipesModel.uniqIngrTag,
    recipesModel.uniqAppTag,
    recipesModel.uniqUstTag
  ]);

  const ddComponentsLst = ddListEl.map(
    (dropdownEl) => new DdComponents(dropdownEl)
  );

  ddComponentsLst.forEach((ddCmpts) => {
    ddCmpts.ddBtn.addEventListener("click", () => {
      openDropdown(ddCmpts);
    });
    // console.log("ddCmpts.ddOptions", ddCmpts.ddOptions);
    // console.log("ddCmpts.ddOptionLst", ddCmpts.ddOptionLst);
    ddCmpts.ddOptionLst.forEach((option) =>
      option.addEventListener("click", () =>
        option.classList.toggle("selected")
      )
    );
  });
}

export { initAllDropdown };
