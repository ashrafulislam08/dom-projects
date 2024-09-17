const fruits = ["🍕", "🍔", "🍟", "🌭", "🍖"];

const indexInput = document.getElementById("index");
const submitButton = document.getElementById("submit");
const displayElement = document.getElementById("display-element");

submitButton.addEventListener("click", function () {
  if (typeof Number(indexInput.value) === "number") {
    displayElement.innerText = fruits[indexInput.value];
    console.log(fruits[indexInput.value]);
  }
});
