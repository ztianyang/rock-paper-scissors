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

function printChoices(playerSelection, computerSelection) {
    console.log(`You chose: ${playerSelection}`);
    console.log(`The computer chose: ${computerSelection}`);
}

function playRound(playerSelection, computerSelection) {
    if (!playerSelection) {
        return "invalid";
    }
    playerSelection = playerSelection.toLowerCase();
    printChoices(playerSelection, computerSelection);

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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose one (rock/paper/scissors): ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result === "draw") {
            console.log("It's a draw");
        } else if (result == "player") {
            console.log("You score one point!");
            playerScore++;
        } else {
            if (result == "invalid") {
                console.log("Invalid choice");
            }
            console.log("The computer scores one point");
            computerScore++;
        }
    }

    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (playerScore === computerScore) {
        console.log("It's a tie!");
    } else if (playerScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("The computer wins");
    }
}

game();