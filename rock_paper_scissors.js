const buttons = document.querySelectorAll("button")
const playerResult = document.querySelector("div.player-result")
const computerResult = document.querySelector("div.computer-result")
let userCount = 0;
let computerCount = 0;


buttons.forEach(
    button => button.addEventListener("click", playRound)
)


function getComputerChoice () {
    let computerChoice;
    let random_number = Math.floor((Math.random() * 3) + 1);
    switch (random_number) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    return computerChoice
}


function playRound (event) {
    let playerSelection = event.target.textContent.toLowerCase();
    let computerSelection = getComputerChoice()
    console.log(playerSelection)
    console.log(computerSelection)
    let winner;
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            winner = "player";
        } else if (computerSelection == "paper") {
            winner = "computer"
        } else {
            winner = "draw"
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            winner = "player";
        } else if (computerSelection == "rock") {
            winner = "computer";
        } else {
            winner = "draw";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            winner = "player"
        } else if (computerSelection == "scissors") {
            winner = "computer";
        } else {
            winner = "draw";
        }
    }

    return gameEngine(winner);
}

function gameEngine (winner) {
    // Increasing the counts of each player
    if (winner == "draw") {
        return
    }
    else if (winner == "player") {
        userCount += 1;
        playerResult.textContent = `Player: ${userCount}`;
    } else if (winner = "computer") {
        computerCount += 1;
        computerResult.textContent = `Computer: ${computerCount}`;
    }

    // First player to five
    if (userCount == 5 || computerCount ==5) {
        let playerWon = userCount == 5 ? true: false;
        userCount = 0;
        computerCount = 0;
        computerResult.textContent = `Computer: ${computerCount}`;
        playerResult.textContent = `Player: ${userCount}`;
        return  playerWon ? alert("You Win") : alert("You Lose");
    }
}
