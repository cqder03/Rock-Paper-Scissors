let playerPoints = 0;
let computerPoints = 0;
const conclusion = document.querySelector('.conclusion');
const gameEvent = document.querySelector('.gameEvent');
const playerChoiceIcon = document.querySelector('.choices-player-icon');
const computerChoiceIcon = document.querySelector('.choices-computer-icon');
const playerPointsValue = document.querySelector('.player-score-span');
const computerPointsValue = document.querySelector('.computer-score-span');

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else if (randomNumber === 3) {
        return 'Scissors';
    }
}

function playRound(choice) {
    let playChoice = choice;
    let setComputerChoice = getComputerChoice();
    let setPlayerChoice = playChoice.slice(0, 1).toUpperCase() + playChoice.slice(1).toLowerCase();
    let message;

    

    if (setPlayerChoice == setComputerChoice) {
        message = "Tie";
        conclusion.textContent = message;
        gameEvent.textContent = `${setPlayerChoice} ties with ${setComputerChoice}`;
    } else if (setPlayerChoice == "Rock" && setComputerChoice == "Scissors") {
        message = "You win";
        conclusion.textContent = message;
        gameEvent.textContent = `${setPlayerChoice} beats ${setComputerChoice}`;
    } else if (setPlayerChoice == "Scissors" && setComputerChoice == "Rock") {
        message = "You lose";
        conclusion.textContent = message;
        gameEvent.textContent = `${setComputerChoice} beats ${setPlayerChoice}`;
    } else if (setPlayerChoice == "Paper" && setComputerChoice == "Rock") {
        message = "You win";
        conclusion.textContent = message;
        gameEvent.textContent = `${setPlayerChoice} beats ${setComputerChoice}`;
    } else if (setPlayerChoice == "Rock" && setComputerChoice == "Paper") {
        message = "You lose";
        conclusion.textContent = message;
        gameEvent.textContent = `${setComputerChoice} beats ${setPlayerChoice}`;
    } else if (setPlayerChoice == "Scissors" && setComputerChoice == "Paper") {
        message = "You win";
        conclusion.textContent = message;
        gameEvent.textContent = `${setPlayerChoice} beats ${setComputerChoice}`;
    } else if (setPlayerChoice == "Paper" && setComputerChoice == "Scissors") {
        message = "You lose";
        conclusion.textContent = message;
        gameEvent.textContent = `${setComputerChoice} beats ${setPlayerChoice}`;
    }

    if (setComputerChoice === 'Rock') {
        computerChoiceIcon.textContent = '✊';
    } else if (setComputerChoice === 'Paper') {
        computerChoiceIcon.textContent = '✋';
    } else if (setComputerChoice === 'Scissors') {
        computerChoiceIcon.textContent = '✌️';
    }

    if (setPlayerChoice === 'Rock') {
        playerChoiceIcon.textContent = '✊';
    } else if (setPlayerChoice === 'Paper') {
        playerChoiceIcon.textContent = '✋';
    } else if (setPlayerChoice === 'Scissors') {
        playerChoiceIcon.textContent = '✌️';
    }

    
     
    if (message === "You lose") {
        computerPoints += 1;
        computerPointsValue.textContent = computerPoints;
    } else if (message === "You win") {
        playerPoints += 1;
        playerPointsValue.textContent = playerPoints;
    } else if (message === "Tie") {
        computerPoints += 0;
        playerPoints += 0;
    }

    if (playerPoints === 5 || computerPoints === 5) {
        btnDisabler(true);
        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Restart game';
        restartBtn.classList.add('restartBtn');
        const main = document.querySelector('#main');
        const btnHolder = document.createElement('div');
        btnHolder.classList.add('btnHolder');
        main.appendChild(btnHolder);
        btnHolder.appendChild(restartBtn);
        restartBtn.addEventListener('click', restartGame);
    }
}

function btnDisabler(arg) {
    const btns = document.querySelectorAll('button');
    if (arg == true) {
        for (let btn of btns) {
            btn.disabled = true;
        }
    } else if (arg == false) {
        for (let btn of btns) {
            btn.disabled = false;
        }
    }
}

function restartGame() {
    computerPoints = 0;
    playerPoints = 0;
    computerPointsValue.textContent = 0;
    playerPointsValue.textContent = 0;
    conclusion.textContent = 'Choose your weapon';
    gameEvent.textContent = 'First to 5 is winner of the game!';
    playerChoiceIcon.textContent = '❔';
    computerChoiceIcon.textContent = '❔';

    const btnHolder = document.querySelector('.btnHolder');
    const main = document.querySelector('#main');

    btnDisabler(false);
    main.removeChild(btnHolder);
}

const playerChoice = document.querySelector('#player-choice');

playerChoice.addEventListener('click', (event) => {
    let targetId = event.target.id;

    switch(targetId) {
        case 'rock':
            playRound('rock');
            break;
        case 'paper':
            playRound('paper');
            break;
        case 'scissors':
            playRound('scissors');
            break;
    }
});
