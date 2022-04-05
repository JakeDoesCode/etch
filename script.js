let click = "true";
let color = "black";
document.querySelector(".error").style.display = "none";

function makeBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let block = document.createElement("div");
    block.addEventListener("mouseover", colorBlock);
    block.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", block);
  }
}

makeBoard(16);

function changeSize(input) {
  document.querySelector(".error").style.display = "none";
  if (input >= 2 && input <= 100) {
    makeBoard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

function colorBlock() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}
function changeColor(choice) {
  color = choice;
}
function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").style.textDecoration = "none";
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode").style.textDecoration = "line-through";
      document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
  }
});
