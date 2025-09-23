let easyBtn = document.getElementById("easy-btn");
let mediumBtn = document.getElementById("medium-btn");
let hardBtn = document.getElementById("hard-btn");
const gameTable = document.getElementById("game-table");

function letterLogicEasy() {
  let possibleLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
  ];
  let selected = [];
  let letters = [];
  while (selected.length <= 15) {
    let random = Math.floor(Math.random() * 16);
    if (!selected.includes(random)) {
      selected.push(random);
    }
  }
  selected.forEach((number) => {
    letters.push(possibleLetters[number]);
  });
  console.log(letters);
}

function letterLogicMedium() {
  let possibleLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
  ];
}

function letterLogicHard() {}

console.log("hello");

easyBtn.addEventListener("click", function () {
  generateTable(4);
});
mediumBtn.addEventListener("click", function () {
  generateTable(6);
});
hardBtn.addEventListener("click", function () {
  generateTable(8);
});
resetBtn.addEventListener("click", () => resetBtnFunc());

window.addEventListener("load", () => {
  resetBtn.style.display = "none";
});

function resetBtnFunc() {
  console.log("reset btn");
  easyBtn.style.display = "inline";
  mediumBtn.style.display = "inline";
  hardBtn.style.display = "inline";
}

function generateTable(difficulty) {
  console.log(difficulty);
  gameTable.textContent = "";
  easyBtn.style.display = "none";
  mediumBtn.style.display = "none";
  hardBtn.style.display = "none";
  resetBtn.style.display = "inline";

  for (let i = 0; i < difficulty; i++) {
    let newRow = document.createElement("TR");
    for (let i = 0; i < difficulty; i++) {
      let cell = document.createElement("TD");
      cell.textContent = "Test";
      newRow.appendChild(cell);
    }
    gameTable.appendChild(newRow);
  }
}
