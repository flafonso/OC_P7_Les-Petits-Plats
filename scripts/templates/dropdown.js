function openDropdown(dropdownEl) {
  // Little change of dropdown style when it's open
  dropdownEl.classList.toggle("dropdown--open");
  dropdownEl.querySelector(".dropdown__arrow").classList.toggle("dropdown__arrow--rotate");
  // Show or hide options content
  dropdownEl.querySelector(".dropdown__content").classList.toggle("dropdown__content--visible");
}

function calcDropWidth(allDropdownEl) {
  allDropdownEl.forEach((dropdownEl) => {
    const dropdownBtnWidth = dropdownEl
      .querySelector(".dropdown__btn")
      .offsetWidth.toString();
    dropdownEl.style.width = `${dropdownBtnWidth}px`;
  });
}

// Sets up the "unselect-btn" button functionality for a dropdown selected-option or selected-tag
function setUnselectBtn(parentOption, currentChild, otherChild) {
  currentChild.querySelector(".unselect-btn").addEventListener("click", () => {
    parentOption.classList.remove("selected");
    currentChild.parentNode.removeChild(currentChild);
    otherChild.parentNode.removeChild(otherChild);
  });
}

// Hides the option clicked and creates the associated elements in .dropdown__selected-options and .filters-section__tags
function selectOption(dropdownEl, option) {
  option.classList.add("selected");
  // selctOption corresponds to the selected items visible in the drop-down menu
  const selctOption = document.createElement("li");
  // selctTag corresponds to the selected items visible outside the drop-down menu
  const selctTag = document.createElement("div");
  selctOption.innerHTML = selctTag.innerHTML = `
      ${option.textContent}<div class="unselect-btn"></div>
  `;
  setUnselectBtn(option, selctOption, selctTag);
  setUnselectBtn(option, selctTag, selctOption);
  dropdownEl.querySelector(".dropdown__selected-options").append(selctOption);
  document.querySelector(".selected-tags").append(selctTag);
}

// Sets the dropdown options for a specific dropdown element with a specific tag list
function setDropdownOptions(dropdownEl, tagLst) {
  // Create list item elements for tags
  const lstTagsEl = tagLst.map((tag) => {
    const liEl = document.createElement("li");
    liEl.textContent = tag;
    liEl.addEventListener("click", (e) =>
      selectOption(dropdownEl, e.currentTarget)
    );
    return liEl;
  });
  dropdownEl.querySelector(".dropdown__options").append(...lstTagsEl);
}

// Initialize all dropdowns
function initAllDropdown(recipesModel) {
  // Get all dropdown elements
  const allDropdownEl = Array.from(document.querySelectorAll(".dropdown"));

  // Calculate dropdown width
  calcDropWidth(allDropdownEl);
  // Update dropdown width on window resize
  window.addEventListener("resize", () => calcDropWidth(allDropdownEl));

  // Set dropdown options for each dropdown element
  setDropdownOptions(allDropdownEl[0], recipesModel.ingrTags);
  setDropdownOptions(allDropdownEl[1], recipesModel.appTags);
  setDropdownOptions(allDropdownEl[2], recipesModel.ustTags);

  // Add click event listener to open dropdown
  allDropdownEl.forEach((dropdownEl) => {
    dropdownEl.querySelector(".dropdown__btn").addEventListener("click", () => {
      openDropdown(dropdownEl);
    });
  });
}

export { initAllDropdown };
