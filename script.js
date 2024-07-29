const rockButton = document.querySelector("#Rock")
const paperButton = document.querySelector("#Paper")
const scissorsButton = document.querySelector("#Scissors")
const outcomeDiv = document.querySelector('#outcome')
const humanScoreSpan = document.querySelector('.human-score')
const computerScoreSpan = document.querySelector('.computer-score')

function getComputerChoice() {
    let randomNum = getRandomInt(1, 3);
    function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
    num = randomNum;
    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound(humanSelection, computerSelection) {
    // Rock
    if (humanSelection === "Rock" && computerSelection === "Paper") {
        const p = document.createElement('p')
        p.textContent = "You picked Rock. Computer picked paper. You Lose! Paper beats Rock."
        outcomeDiv.appendChild(p)
        computerScore += 1;
    } else if (humanSelection === "Rock" && computerSelection === "Scissors") {
        const p = document.createElement('p')
        p.textContent = "You picked Rock. Computer picked Scissors. You win! Rock beats Scissors."
        outcomeDiv.appendChild(p)
        humanScore += 1;
    } else if (humanSelection === "Rock" && computerSelection === "Rock") {
        const p = document.createElement('p')
        p.textContent = "You picked Rock. Computer picked Rock. It's a draw."
        outcomeDiv.appendChild(p)
    }
  // Paper
    if (humanSelection === "Paper" && computerSelection === "Rock") {
        const p = document.createElement('p')
        p.textContent = "You picked Paper. Computer picked Rock. You win! Paper beats Rock."
        outcomeDiv.appendChild(p)
        humanScore += 1;
    } else if (humanSelection === "Paper" && computerSelection === "Scissors") {
        const p = document.createElement('p')
        p.textContent = "You picked Paper. Computer picked Scissors. You lose! Scissors beat Paper."
        outcomeDiv.appendChild(p)
        computerScore += 1;
    } else if (humanSelection === "Paper" && computerSelection === "Paper") {
        const p = document.createElement('p')
        p.textContent = "You picked Paper. Computer picked Paper. It's a draw."
        outcomeDiv.appendChild(p)
    }
     // Scissors
     if (humanSelection === "Scissors" && computerSelection === "Rock") {
        const p = document.createElement('p')
        p.textContent = "You picked Scissors. Computer picked Rock. You lose! Rock beats Scissors."
        outcomeDiv.appendChild(p)
        computerScore += 1;
    } else if (humanSelection === "Scissors" && computerSelection === "Paper") {
        const p = document.createElement('p')
        p.textContent = "You picked Scissors. Computer picked Paper. You win! Scissors beat Paper."
        outcomeDiv.appendChild(p)
        humanScore += 1;
    } else if (humanSelection === "Scissors" && computerSelection === "Scissors") {
        const p = document.createElement('p')
        p.textContent = "You picked Scissors. Computer picked Scissors. It's a draw."
        outcomeDiv.appendChild(p)
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const humanSelection = "Rock"
    playRound(humanSelection, computerSelection)
    trackScore(humanScore, computerScore)
    checkWinner(humanScore, computerScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const humanSelection = "Paper"
    playRound(humanSelection, computerSelection)
    trackScore(humanScore, computerScore)
    checkWinner(humanScore, computerScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const humanSelection = "Scissors"
    playRound(humanSelection, computerSelection)
    trackScore(humanScore, computerScore)
    checkWinner(humanScore, computerScore)
})

let humanScore = 0;
let computerScore = 0;    

function trackScore(humanScore, computerScore) {
    humanScoreSpan.textContent = `Your score: ${humanScore}`
    computerScoreSpan.textContent = `Computer score: ${computerScore}`  
}

function checkWinner(humanScore, computerScore) {
    if (humanScore === 5) {
        const p = document.createElement('p')
        p.classList.add('winner')
        p.textContent = `You won! ${humanScore} to ${computerScore}.`
        outcomeDiv.appendChild(p)
    } 
    
    if (computerScore === 5) {
        const p = document.createElement('p')
        p.classList.add('loser')
        p.textContent = `You lost! ${humanScore} to ${computerScore}.`
        outcomeDiv.appendChild(p)
    } 
    
}

