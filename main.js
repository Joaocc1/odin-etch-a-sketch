const sketchpad = document.querySelector(".sketchpad");
const resBtn = document.querySelector(".res-btn");
const wipeBtn = document.querySelector(".wipe-btn");
let resolution = 16;

// create divs
function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.opacity = 0.1;
  square.style.height = `${100 / resolution}%`;
  square.style.flexBasis = `${100 / resolution}%`;
  sketchpad.appendChild(square);
}

function generateGrid() {
  for (let i = 0; i < resolution * resolution; i++) {
    createSquare();
  }
}

// Event Listeners

sketchpad.addEventListener("mouseover", (e) => {
  if (e.target.classList[0] === "square") {
    let opacity = parseFloat(e.target.style.opacity);
    if (opacity < 1) {
      opacity = opacity + 0.1;
      e.target.style.opacity = opacity;
      e.target.style.backgroundColor = "#000000";
    }
  }
});

// Get new resolution for board
resBtn.addEventListener("click", () => {
  let newSize = prompt(
    "Choose a new resolution: write a number up to 100. (ex: 100 will make the sketchpad have the resolution of 100x100)",
  );

  if (newSize >= 1 && newSize <= 100) {
    resolution = newSize;
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
      square.remove();
    });

    generateGrid();
  } else {
    alert("You need to choose a number between 1 and 100");
  }
});

wipeBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "#ffffff";
    square.style.opacity = 0.1;
  });
});

generateGrid();

// testing
