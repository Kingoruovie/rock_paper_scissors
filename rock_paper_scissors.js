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

function getUsersResponse () {
    let userChoice = prompt("What is your Choice");
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
        return userChoice;
    } else {
        console.log("Wrong choice, you would have to pick between 'Rock', 'Paper' or 'Scissors'....")
        return getUsersResponse()
    }
}

function playRound (playerSelection, computerSelection) {
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

    return winner;
}

function gameEngine () {
    let userCount = 0;
    let computerCount = 0;
    for (let i=1; i<= 5; i++) {
        computerPlays = getComputerChoice();
        playerPlays = getUsersResponse();
        verdict = playRound(playerPlays, computerPlays)
        if (verdict == "player") {
            userCount += 1;
            console.log(`You won this round, ${playerPlays} beats ${computerPlays}`);
        } else if (verdict == "computer") {
            computerCount += 1;
            console.log(`You lose this round, ${playerPlays} loses to ${computerPlays}`);
        } else {
            console.log(`It is a tie in this round, you both played ${playerPlays}`);
        }
    }

    if (userCount > computerCount) {
        console.log("You Win 🥳🥳🥳🥳🥳");
    } else if (userCount < computerCount) {
        console.log("You Lose 😥😥😥😥😥");
    } else {
        console.log("IT WAS A DRAW AFTER ALL IS SAID AND DONE");
    }
}

gameEngine()