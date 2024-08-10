const containerElement = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  let colorContainerElement = document.createElement("div");
  colorContainerElement.classList.add("color_container");
  containerElement.appendChild(colorContainerElement);
}

const colorContainerElements = document.querySelectorAll(".color_container");

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    generateColors();
  }
});

generateColors();

function generateColors() {
  colorContainerElements.forEach((colorContainerElement) => {
    const newColorCode = randomColor();
    colorContainerElement.style.backgroundColor = "#" + newColorCode;
    colorContainerElement.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const character = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNumber = Math.floor(Math.random() * character.length);
    colorCode += character.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}
