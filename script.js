"use strict";

const accordionLabels = document.querySelectorAll(".accordion__label");

for (let i = 0; i < accordionLabels.length; i++) {
  accordionLabels[i].addEventListener("click", clickTest);
}

function clickTest() {
  console.log("you clicked?");
}
