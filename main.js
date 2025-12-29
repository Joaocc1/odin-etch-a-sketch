const sketchpad = document.querySelector(".sketchpad");
const wipeBtn = document.querySelector(".wipe-btn");
let width = 16;

// create divs
function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.height = `${900 / width}px`;
  square.style.width = `${900 / width}px`;
  square.style.flexBasis = `${900 / width}px`;
  sketchpad.appendChild(square);
}

// clean sketchpad board
function wipeBoard() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.remove("hovered");
  });
}

for (let i = 0; i < width * width; i++) {
  createSquare();
}

// Event Listeners

sketchpad.addEventListener("mouseover", (e) => {
  if (e.target.classList[0] === "square") {
    e.target.classList.add("hovered");
  }
});

wipeBtn.addEventListener("click", (e) => {
  wipeBoard();
});
