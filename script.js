// Create variable to hold computer choice 
// function to create computer choice 
// Randomly select either rock, paper or scissors 
// Assign the selection to computer choice 
// 


// let computerResponse = getRandomInt(1, 3);

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function getComputersChoice(num) {

//     if (num === 1) {
//         return "Rock";
//     } else if (num === 2) {
//         return "Paper";
//     } else {
//         return "Scissors";
//     }
// }

// let computerChoice = getComputersChoice(computerResponse);

// console.log(computerChoice)



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

console.log(computerChoice)