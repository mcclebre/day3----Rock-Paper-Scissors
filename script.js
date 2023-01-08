const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn') 
const selectionContainerElement = document.getElementById('selection-container')
const selectionButtonsElement = document.getElementById('selection-btn')
const scoreBoardElement = document.getElementById('scoreboard')
const computerSelectionElement = document.getElementById('computer-selection-display')
const playerSelectionElement = document.getElementById('selection-display')


let currentResultIndex, shuffledComputerResults


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
    currentResultIndex++
    setNextRound()
    
})




function startGame() {
startButton.classList.add('hide')
shuffledComputerResults = results.sort(() => 
Math.random() - .5)
currentResultIndex = 0
selectionContainerElement.classList.remove('hide')
scoreBoardElement.classList.remove('hide')
setNextRound()
}
function checkWins() {

}

function setNextRound() {
checkWins()

}

function computerRandomSelection() {

}

function revealComputerSelection(computerSelection) {
    computerSelectionElement.innerText = computerSelection.text

}

function resetState() {
clearStatusClass(document.body)
while( selectionButtonsElement.firstChild) {
    selectionButtonsElement.removeChild(selectionButtonsElement.firstChild)
}
}

function selectAnswer(e) {
    const selectedButton = e.target
    const win = selectedButton.dataset
    // add more to this, this is your selected value of rock(1), paper(2), or scissors(3)
    // if this is 'winner' over the value of the random result, then user wins, otherwise, user loses.
    setStatusClass(document.body, win)
    Array.from(selectionButtonsElement.children).forEach(button => {
        setStatusClass(button,button.dataset)
    })
    if (shuffledComputerResults.length > currentResultIndex + 1) {
       setNextRound()
    } else {
        startButton.innerText = 'GAME OVER... RETRY?'
        startButton.classList.remove('hide')
    }

}

function setStatusClass(element, win) {
clearStatusClass(element)
if (win) {
    element.classList.add('win')
} else {
    element.classList.add('lose')
}
}

function clearStatusClass(element) {

}


const results = [
    {
        text: 'ROCK' , resultId: 1 
    },

    {
       text: 'PAPER' , resultId: 2
    },

    {
       text: 'SCISSORS' , resultId: 3
    },
    {
        text: 'ROCK' , resultId: 1
    },

    {
       text: 'PAPER' , resultId: 2
    },

    {
       text: 'SCISSORS' , resultId: 3
    },
    {
        text: 'ROCK' , resultId: 1
    },

    {
       text: 'PAPER' , resultId: 2
    },

    {
       text: 'SCISSORS' , resultId: 3
    },
]