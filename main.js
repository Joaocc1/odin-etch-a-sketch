const sketchpad = document.querySelector(".sketchpad");
let width = 16;

sketchpad.style.maxWidth = `${width * 10}px`;

// create divs
function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  sketchpad.appendChild(square);
}

for (let i = 0; i < width * width; i++) {
  createSquare();
}

sketchpad.addEventListener("mouseover", (e) => {
  if (e.target.classList[0] === "square") {
    e.target.classList.add("hovered");
  }
});
