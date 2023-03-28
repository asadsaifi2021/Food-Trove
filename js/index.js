// category buttons
function handleButtonClick(category, button) {
  //unhide the list
  hideItems.classList.remove("hidden");

  // un-select every button
  const buttons = document.querySelectorAll(".category-button");
  buttons.forEach((button) => button.classList.remove("selected"));

  const landing = document.querySelector(".landing");
  landing.classList.add("hidden");

  // select the current button
  button.classList.add("selected");

  // if the category is selected
  if (category === "grains") {
    console.log("Grains!");
  } else if (category == "fruits") {
    console.log("Fruits!");
  } else if (category == "vegetables") {
    console.log("Vegetables!");
  } else if (category == "protein") {
    console.log("Protein!");
  } else if (category == "dairy") {
    console.log("Dairy!");
  } else {
    console.log("This should not happen");
  }
}

// define
function buttonHover(button) {
  button.classList.add("hovered");
}
