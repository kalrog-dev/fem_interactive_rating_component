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

    // Change rating
    btn.classList.toggle("review__btn-rating--selected");
    rating = selected;
  });
});


  
