function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "invalid";
    }

    if (playerSelection === computerSelection) {
        return "draw";
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                return "computer";
            } else {
                return "player";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "player";
            } else {
                return "computer";
            }
        } else {
            if (computerSelection === "rock") {
                return "computer";
            } else {
                return "player";
            }
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));