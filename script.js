

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


function getHumanChoice() {

    pick = prompt("Enter your choice", "Rock, Paper or Scissors");

    function capitalize(word) {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }

    pick = capitalize(pick);


    switch (pick) {

        case "Rock":
        case "Paper":
        case "Scissors":
            return pick;
            break;
    
        case "":
            return ( "Enter your pick. Please enter either Rock, Paper or Scissors")
        default:
            return ( "Looks like you made a mistake. Please enter either Rock, Paper or Scissors" );
    }
}

function playRound(humanSelection, computerSelection) {

    
    // Rock
    if (humanSelection === "Rock" && computerSelection === "Paper") {
        console.log("You Lose! Paper beats Rock.");
        computerScore += 1;
    } else if (humanSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore += 1;
    } else if (humanSelection === "Rock" && computerSelection === "Rock") {
        console.log("It's a draw.");
    }

  // Paper
    if (humanSelection === "Paper" && computerSelection === "Rock") {
        console.log("You win! Paper beats Rock.");
        humanScore += 1;
    } else if (humanSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You lose! Scissors beat Paper.");
        computerScore += 1;
    } else if (humanSelection === "Paper" && computerSelection === "Paper") {
        console.log("It's a draw.");
    }

     // Scissors
     if (humanSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore += 1;
    } else if (humanSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You win! Scissors beat Paper.");
        humanScore += 1;
    } else if (humanSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("It's a draw.");
    }
}

let humanScore = 0;
let computerScore = 0;    

function playGame() {

    let i = 5; 

    while (i) {

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Your score = ${humanScore}.`);
    console.log(`Computer score = ${computerScore}.`);
    i--;
    }

if (humanScore > computerScore) {
    console.log (`You win! ${humanScore} beats Computers ${computerScore}.`);
} else if (computerScore > humanScore) {
    console.log (`You lose. Computers ${computerScore} beats your ${humanScore}. Better luck next time.`);
} else {
    console.log('Its a draw.');
}

}

playGame();

