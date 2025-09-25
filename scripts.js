let testBtn = document.getElementById("test-btn");
let cheatBtn = document.getElementById("cheat-btn");
let easyBtn = document.getElementById("easy-btn");
let mediumBtn = document.getElementById("medium-btn");
let hardBtn = document.getElementById("hard-btn");
let resetBtn = document.getElementById("reset-btn");
const gameTable = document.getElementById("game-table");
const counter = document.getElementById("counter");
let secondClick = false;
let firstBtn = null;
let solved = 0;
let totalNeeded = 0;
let timesClicked = 0;

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

testBtn.addEventListener("click", function () {
  generateTable(2);
  totalNeeded = 4;
});

easyBtn.addEventListener("click", function () {
  generateTable(4);
  totalNeeded = 16;
});
mediumBtn.addEventListener("click", function () {
  generateTable(6);
  totalNeeded = 36;
});
hardBtn.addEventListener("click", function () {
  generateTable(8);
  totalNeeded = 66;
});
resetBtn.addEventListener("click", () => resetBtnFunc());

cheatBtn.addEventListener("click", () => {
  const allBtn = gameTable.querySelectorAll(".unsolved");
  allBtn.forEach((button) => {
    button.style.color = "rgba(160, 159, 159, 1)";
  });

  setTimeout(() => {
    allBtn.forEach((button) => {
      button.style.color = "rgb(216, 216, 216)";
    });
  }, 800);

  firstBtn = null;
  secondClick = false;
});

window.addEventListener("load", () => {
  gameTable.textContent = "";
  counter.textContent = "";
  cheatBtn.style.display = "none";
  resetBtn.style.display = "none";
});

function resetBtnFunc() {
  timesClicked = 0;
  counter.textContent = "";
  testBtn.style.display = "inline";
  easyBtn.style.display = "inline";
  gameTable.style.backgroundColor = "";
  mediumBtn.style.display = "inline";
  hardBtn.style.display = "inline";
  gameTable.textContent = "";
  cheatBtn.style.display = "none";
  resetBtn.style.display = "none";
  solved = 0;
}

function generateTable(difficulty) {
  letterArray = [];
  letterPos = 0;
  testBtn.style.display = "none";
  easyBtn.style.display = "none";
  mediumBtn.style.display = "none";
  hardBtn.style.display = "none";
  cheatBtn.style.display = "inline";
  resetBtn.style.display = "inline";

  letterArray = letterLogic(difficulty);

  for (let i = 0; i < difficulty; i++) {
    let newRow = document.createElement("TR");
    for (let j = 0; j < difficulty; j++) {
      let cell = document.createElement("td");

      let btn = document.createElement("button");
      btn.id = letterPos;
      btn.textContent = letterArray[letterPos++];

      btn.classList.add("btn");
      btn.classList.add("grid-btn");
      btn.classList.add("unsolved");

      btn.addEventListener("click", () => {
        console.log("Clicked:", btn);
        btn.style.color = "black";
        btnChecked(btn);
      });

      cell.appendChild(btn);
      newRow.appendChild(cell);
    }
    gameTable.appendChild(newRow);
  }
}

function btnChecked(curBtn) {
  timesClicked++;
  if (!secondClick) {
    secondClick = true;
    firstBtn = curBtn;
  } else {
    console.log(firstBtn);
    if (firstBtn.textContent != curBtn.textContent) {
      const allBtn = gameTable.querySelectorAll(".grid-btn");

      allBtn.forEach((button) => {
        button.disabled = true;
      });

      setTimeout(() => {
        firstBtn.style.color = "rgb(216, 216, 216)";
        curBtn.style.color = "rgb(216, 216, 216)";
        firstBtn.firstBtn = null;
        secondClick = false;
        allBtn.forEach((button) => {
          button.disabled = false;
        });
      }, 500);
    } else if (
      firstBtn.textContent == curBtn.textContent &&
      firstBtn.id != curBtn.id
    ) {
      firstBtn.classList.remove("unsolved");
      firstBtn.classList.add("solved");
      curBtn.classList.remove("unsolved");
      curBtn.classList.add("solved");
      firstBtn = null;
      secondClick = false;
      solved += 2;
      if (totalNeeded == solved) {
        const allBtn = gameTable.querySelectorAll(".grid-btn");
        allBtn.forEach((button) => {
          button.style.backgroundColor = "rgba(94, 170, 92, 1)";
        });
        gameTable.style.backgroundColor = "green";
          counter.innerHTML = "Times Clicked: " + timesClicked;
      }
    }
  }
}
