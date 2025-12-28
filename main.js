const container = document.querySelector(".sketchpad");

// create divs

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

for (let i = 0; i < 16 * 16; i++) {
  createSquare();
}
