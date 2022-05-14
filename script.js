"use strict";

const accordionLabel = document.querySelectorAll(".accordion__label");
const mainImage = document.querySelector(".accordion__image");

// add listener for click on each accordion__label
accordionLabel.forEach((question) =>
  question.addEventListener("click", () => {
    question.parentNode.classList.toggle("active");
  })
);

// if (screen.width >= 1440) {
//   mainImage.src = "images/illustration-woman-online-desktop.svg";
// }
