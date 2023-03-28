// // category buttons
// function handleButtonClick(category, button) {
//   //unhide the list
//   hideItems.classList.remove("hidden");

//   // un-select every button
//   const buttons = document.querySelectorAll(".category-button");
//   buttons.forEach((button) => button.classList.remove("selected"));

//   const landing = document.querySelector(".landing");
//   landing.classList.add("hidden");

//   // select the current button
//   button.classList.add("selected");
// }

// define
function buttonHover(button) {
  button.classList.add("hovered");
}
