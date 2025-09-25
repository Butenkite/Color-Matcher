let easyBtn = document.getElementById("easy-btn");
let mediumBtn = document.getElementById("medium-btn");
let hardBtn = document.getElementById("hard-btn");
let resetBtn = document.getElementById("reset-btn");
const gameTable = document.getElementById("game-table");

function letterLogic(difficulty) {
  let possibleLetters = [
    // This is the worst thing I've ever made LOL
    "A",
    "A",
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
    "E",
    "E",
    "F",
    "F",
    "G",
    "G",
    "H",
    "H",
    "I",
    "I",
    "J",
    "J",
    "K",
    "K",
    "L",
    "L",
    "M",
    "M",
    "N",
    "N",
    "O",
    "O",
    "P",
    "P",
    "Q",
    "Q",
    "R",
    "R",
    "S",
    "S",
    "T",
    "T",
    "U",
    "U",
    "V",
    "V",
    "W",
    "W",
    "X",
    "X",
    "Y",
    "Y",
    "Z",
    "Z",
    "1",
    "1",
    "2",
    "2",
    "3",
    "3",
    "4",
    "4",
    "5",
    "5",
    "6",
    "6",
  ];
  let selected = [];
  let letters = [];
  while (selected.length <= difficulty * difficulty - 1) {
    let random = Math.floor(Math.random() * difficulty * difficulty);
    if (!selected.includes(random)) {
      selected.push(random);
    }
  }
  selected.forEach((number) => {
    letters.push(possibleLetters[number]);
  });
  return letters;
}

function letterLogicHard() {}

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
  easyBtn.style.display = "inline";
  mediumBtn.style.display = "inline";
  hardBtn.style.display = "inline";
}

function generateTable(difficulty) {
  letterArray = [];
  letterPos = 0;
  gameTable.textContent = "";
  easyBtn.style.display = "none";
  mediumBtn.style.display = "none";
  hardBtn.style.display = "none";
  resetBtn.style.display = "inline";

  letterArray = letterLogic(difficulty);

  for (let i = 0; i < difficulty; i++) {
    let newRow = document.createElement("TR");
    for (let j = 0; j < difficulty; j++) {
      let cell = document.createElement("td");

      let btn = document.createElement("button");
      btn.textContent = letterArray[letterPos++];
      btn.classList.add("btn");
      btn.classList.add("grid-btn");

      btn.addEventListener("click", () => {
        console.log("Clicked:", btn.textContent);
        btn.style.color = "black";
      });

      cell.appendChild(btn);
      newRow.appendChild(cell);
    }
    gameTable.appendChild(newRow);
  }
}
