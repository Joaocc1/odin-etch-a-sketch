const sketchpad = document.querySelector(".sketchpad");
const resizeBtn = document.querySelector(".resize-btn");
const wipeBtn = document.querySelector(".wipe-btn");
let width = 16;

// create divs
function createSquare(squareSize) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.height = `${100 / squareSize}%`;
  square.style.flexBasis = `${100 / squareSize}%`;
  sketchpad.appendChild(square);
}

function generateGrid() {
  for (let i = 0; i < width * width; i++) {
    createSquare(width);
  }
}

// Event Listeners

sketchpad.addEventListener("mouseover", (e) => {
  if (e.target.classList[0] === "square") {
    e.target.classList.add("hovered");
  }
});

// Get new resolution for board
resizeBtn.addEventListener("click", () => {
  let newSize = prompt(
    "Choose a new resolution: write a number up to 100. (ex: 100 will make the sketchpad have the resolution of 100x100)",
  );

  width = newSize;
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.remove();
  });

  generateGrid(width);
});

wipeBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.remove("hovered");
  });
});

generateGrid();
