// Clear local storage or insert user's rating
if (window.location.href.endsWith("index.html")) {
  localStorage.clear();
} else {
  let ratingInsertPosition = document.querySelector(".review__rating-insert-position");
  ratingInsertPosition.textContent = localStorage.getItem("rating");
}

const btnsRating = [...document.querySelectorAll(".review__btn-rating")];
let rating = 0;
let selected = 0;

// When any rating button is clicked
btnsRating.forEach(btn => {
  btn.addEventListener("click", () => {
    // Get selection
    if (btn.classList.contains("one")) {
      selected = 1;
    } else if (btn.classList.contains("two")) {
      selected = 2;
    } else if (btn.classList.contains("three")) {
      selected = 3;
    } else if (btn.classList.contains("four")) {
      selected = 4;
    } else {
      selected = 5;
    }

    // Remove any previous selection, unless the same rating clicked
    if (rating !== 0 && rating !== selected) {
      btnsRating.forEach(btn => btn.classList.remove("review__btn-rating--selected"));
    }

    // Visual change rating
    btn.classList.toggle("review__btn-rating--selected");

    // Check if anything is currently selected
    let somethingSelected = btnsRating.some(btn => btn.classList.contains("review__btn-rating--selected"));
    if (!somethingSelected) {
      selected = 0;
    }

    // Change rating
    rating = selected;
    localStorage.setItem("rating", String(rating));
  });
});

// When a submit button is clicked without giving a rating
if (window.location.href.endsWith("index.html")) {
  const btnSubmit = document.querySelector(".review__btn-submit");
  btnSubmit.addEventListener("click", (event) => {
    // Check if the user gave rating
    if (!selected) {
      event.preventDefault();
    }
  })
}