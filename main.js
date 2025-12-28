const container = document.querySelector(".container");

// create divs

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

for (let i = 0; i < 1000; i++) {
  createSquare();
}
