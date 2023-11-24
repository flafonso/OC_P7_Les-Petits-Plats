import { calcDropWidth } from "/scripts/templates/dropdown.js";

window.addEventListener("resize", calcDropWidth);


function init() {
  calcDropWidth()
}



init();