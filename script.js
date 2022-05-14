"use strict";

const accordionLabel = document.querySelectorAll(".accordion__label");

// add listener for click on each accordion__label
accordionLabel.forEach((question) =>
  question.addEventListener("click", () => {
    // if clicked on accordion__label's parent has active class then toggle it off
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    }
    // otherwise add it
    else {
      question.parentNode.classList.add("active");
    }
  })
);
