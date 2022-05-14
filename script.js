"use strict";

const accordionLabel = document.querySelectorAll(".accordion__label");

// add listener for click on each accordion__label
accordionLabel.forEach((question) =>
  question.addEventListener("click", () => {
    question.parentNode.classList.toggle("active");
  })
);
