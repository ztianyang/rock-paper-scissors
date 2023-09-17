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

    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                return "You lose! Paper beats rock";
            } else {
                return "You win! Rock beats scissors";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "You win! Paper beats rock";
            } else {
                return "You lose! Scissors beat paper";
            }
        } else {
            if (computerSelection === "rock") {
                return "You lose! Rock beats scissors";
            } else {
                return "You win! Scissors beat paper";
            }
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));