

function getComputersChoice(num) {

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

let computerChoice = getComputersChoice();


function getHumanChoice(pick) {

    pick = capitalize(prompt("Enter your choice", "Rock, Paper or Scissors"));

        function capitalize(word) {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }

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

let humanChoice = getHumanChoice();

console.log(humanChoice);