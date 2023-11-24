// let element = document.getElementById('yourElementId');
// let style = window.getComputedStyle(element);
// let width = style.getPropertyValue('width');

function calcDropWidth() {
  console.log("coucou");
  const dropdownListEl = document.querySelectorAll(".dropdown");
  // console.log("dropdownListEl", dropdownListEl);
  dropdownListEl.forEach((dropdownEl) => {
    const dropdownBtnWidth = dropdownEl.querySelector(".dropdown__btn").offsetWidth.toString();
    // console.log("dropdownBtnWidth", dropdownBtnWidth);
    // console.log("dropdownEl", dropdownEl);
    dropdownEl.style.width = `${dropdownBtnWidth}px`;
  });
}


export { calcDropWidth };