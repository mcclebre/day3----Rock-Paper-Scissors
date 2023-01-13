const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const playerScoreSpan = document.querySelector("[data-your-score]");

const SELECTIONS = [
  {
    name: "rock",
    display: "ROCK",
    beats: "scissors",
  },
  {
    name: "paper",
    display: "PAPER",
    beats: "rock",
  },
  {
    name: "scissors",
    display: "SCISSORS",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const playerWin = isWinner(selection, computerSelection);
  const computerWin = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWin);
  addSelectionResult(selection, playerWin);

  if (playerWin) incrimentScore(playerScoreSpan);
  if (computerWin) incrimentScore(computerScoreSpan);
}

function incrimentScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.display;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}
