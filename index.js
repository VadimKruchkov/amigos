const bodyEl = document.body;
const buttonEl = document.querySelector("button");
const colorEl = document.querySelector(".name__color");

function newColor() {
  const randomColor = randomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
}
function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
buttonEl.addEventListener("click", newColor);
let timeClear = setInterval(newColor, 1000);
setTimeout(() => {
  clearInterval(timeClear);
  boom();
}, 12000);

clearInterval(newColor, 10000);
const printText = document.querySelector(".print__text");
printText.style.fontSize = "200px";
printText.textContent = "Go";
function printNum(from, to) {
  let current = from;
  let timeId = setInterval(() => {
    printText.textContent = current -= 1;
    if (current === to) {
      clearInterval(timeId);
    }
    // current -= 1;
  }, 1000);
}

printNum(11, 0);
function boom() {
  printText.textContent = "Boom";
}
