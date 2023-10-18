let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const scores = document.querySelector("#scores");
const output = document.querySelector("#output");

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

function getRoundResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    } else {
        if (playerChoice === "rock") {
            if (computerChoice === "paper") {
                return "computer";
            } else {
                return "player";
            }
        } else if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                return "player";
            } else {
                return "computer";
            }
        } else {
            if (computerChoice === "rock") {
                return "computer";
            } else {
                return "player";
            }
        }
    }
}

function updateScore() {
    scores.textContent = `You: ${playerScore} Computer: ${computerScore}`;
}

function appendText(div, text) {
    let p = document.createElement("p");
    p.textContent = text;
    div.appendChild(p);
}

function printResult(playerChoice, computerChoice, result) {
    appendText(output, `You chose: ${playerChoice}`);
    appendText(output, `Computer chose: ${computerChoice}`);
    if (result === "draw") {
        appendText(output, "It's a draw.");
    } else if (result === "player") {
        appendText(output, "You scored a point!");
    } else {
        appendText(output, "Computer scored a point.");
    }
    output.appendChild(document.createElement("br"));
}

function gameOver(won) {
    if (won) {
        appendText(output, "You win!");
    } else {
        appendText(output, "You lose.");
    }
    appendText(output, "Reload this page to play again.");

    rockButton.setAttribute("disabled", "");
    paperButton.setAttribute("disabled", "");
    scissorsButton.setAttribute("disabled", "");
}

function playRound(choice) {
    let computerChoice = getComputerChoice();
    let result = getRoundResult(choice, computerChoice);
    if (result !== "draw") {
        if (result === "player") {
            playerScore++;
        } else {
            computerScore++;
        }
    }
    updateScore();
    printResult(choice, computerChoice, result);

    if (playerScore >= 5) {
        gameOver(true);
    }
    if (computerScore >= 5) {
        gameOver(false);
    }
}

rockButton.addEventListener("click", function() {
    playRound("rock");
});

paperButton.addEventListener("click", function() {
    playRound("paper");
});

scissorsButton.addEventListener("click", function() {
    playRound("scissors");
});
