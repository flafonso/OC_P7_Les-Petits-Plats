const tagsEl = document.querySelector(".filters-section__tags");

class DdComponents {
  constructor(dropdownEl) {
    this.ddEl = dropdownEl;
    this.ddBtn = dropdownEl.querySelector(".dropdown__btn");
    this.ddArrow = dropdownEl.querySelector(".dropdown__arrow");
    this.ddContent = dropdownEl.querySelector(".dropdown__content");
    this.ddSearch = dropdownEl.querySelector(".dropdown__search");
    this.ddSelctOptions = dropdownEl.querySelector(
      ".dropdown__selected-options"
    );
    this.ddOptions = dropdownEl.querySelector(".dropdown__options");
    // this.ddOptionLst = Array.from(dropdownEl.querySelectorAll("li"));
    this.ddOptionLst = this.ddOptions.childNodes;
    this.initSelctOptions();
  }

  initSelctOptions() {
    this.ddOptionLst.forEach((option) => {
      if (option.nodeType !== 3) {
        const selctOption = document.createElement("li");
        const selctTag = document.createElement("div");
        selctOption.innerHTML = selctTag.innerHTML = `
            ${option.textContent}<div class="unselect-btn"></div>
        `;
        selctOption
          .querySelector(".unselect-btn")
          .addEventListener("click", () =>
            selctOption.classList.remove("selected")
          );
        selctTag
          .querySelector(".unselect-btn")
          .addEventListener("click", () =>
            selctTag.classList.remove("selected")
          );
        this.ddSelctOptions.append(selctOption);
        tagsEl.append(selctTag);
        // Create a MutationObserver for a pair of elements
        let observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            observer.disconnect();
            if (mutation.attributeName === "class") {
              let targetElement =
                mutation.target === option ? selctOption : option;
              targetElement.className = mutation.target.className;
            }
            // Start observing the two elements
            observer.observe(option, { attributes: true });
            observer.observe(selctOption, { attributes: true });
          });
        });

        // Start observing the two elements
        observer.observe(option, { attributes: true });
        observer.observe(selctOption, { attributes: true });
      }
    });
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

function fillDropdownOptions(allTags) {
  for (let i = 0; i < 3; i++) {
    const lstTagsEl = allTags[i].map((tag) => {
      const liEl = document.createElement("li");
      liEl.textContent = tag;
      return liEl;
    });
    ddListEl[i].querySelector(".dropdown__options").append(...lstTagsEl);
  }
}

function selectOption(optionName) {
  console.log("optionName", optionName);
}

function initAllDropdown(recipesModel) {
  calcDropWidth();
  window.addEventListener("resize", calcDropWidth);

  fillDropdownOptions([
    recipesModel.uniqIngrTag,
    recipesModel.uniqAppTag,
    recipesModel.uniqUstTag,
  ]);

  const ddComponentsLst = ddListEl.map(
    (dropdownEl) => new DdComponents(dropdownEl)
  );

  // pourquoi pas faire une fonction init() dans mon object DdCoponents ?
  ddComponentsLst.forEach((ddCmpts) => {
    ddCmpts.ddBtn.addEventListener("click", () => {
      openDropdown(ddCmpts);
    });
    // console.log("ddCmpts.ddOptions", ddCmpts.ddOptions);
    // console.log("ddCmpts.ddOptionLst", ddCmpts.ddOptionLst);
    ddCmpts.ddOptionLst.forEach((option) =>
      option.addEventListener("click", () => option.classList.add("selected"))
    );
  });
}

export { initAllDropdown };
