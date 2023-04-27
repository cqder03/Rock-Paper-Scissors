let playerPoints = +0;
let computerPoints = +0;

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);  
    if (randomNumber === 1) {
        return("Rock");
    } else if (randomNumber === 2) {
        return("Paper");
    } else if (randomNumber === 3) {
        return("Scissors");
    }  
}



function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose Rock, Paper or Scissors!");
    if (playerSelection == computerSelection) {
        message = "Tie";
        return message;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        message = "You win";
        return message;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        message = "You lose"
        return message;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        message = "You win";
        return message;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        message = "You lose"
        return message;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        message = "You win";
        return message;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        message = "You lose"
        return message;
    }
    function points (message) {
        
        if (message == "You lose") {
            playerPoints += +0;
            computerPoints += +1;
            return playerPoints, computerPoints;
        } else if (message == "You win") {
            playerPoints =+ +1;
            computerPoints =+ +0;
            return playerPoints, computerPoints;
        } else if (message == "Tie") {
            playerPoints += +0;
            computerPoints += +0;
            return playerPoints, computerPoints;
        }
    }

}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (playerPoints > computerPoints) {
        endmsg = "You won the game";
        return endmsg;
    } else {
        endmsg = "You lost the game";
        return endmsg;
    }

}