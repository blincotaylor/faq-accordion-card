"use strict";

const accordionLabels = document.querySelectorAll(".accordion__label");
const accordionContent = document.querySelectorAll(".accordion__content");

for (let i = 0; i < accordionLabels.length; i++) {
  accordionLabels[i].addEventListener("click", labelExpand);
}

function labelExpand() {}
