// TODO: Refactor to remove global variables.

const choices = ['rock', 'paper', 'scissors'];
let round;
let playerScore;
let computerScore; 
const messageContainer = document.querySelector('#message-container');
const playerScoreHTML = document.querySelector('#player-score');
const computerScoreHTML = document.querySelector('#computer-score');
const buttons = document.querySelectorAll('.selection');
const scoreLimit = 5;

function addMessageText(textToAdd) {
    const newMessage = document.createElement('p');
    newMessage.classList.add('message');
    messageContainer.append(textToAdd, newMessage);
}

function resetRoundAndScores() {
    clearMessages();
    round = 1;
    playerScore = 0;
    computerScore = 0;
    setScores();
}

function clearMessages() {
    messageContainer.textContent = "";
}

function setScores() {
    playerScoreHTML.textContent = playerScore;
    computerScoreHTML.textContent = computerScore;
}

function displayPlayerChoice(choice) {
    addMessageText(`You selected ${choice}.`)
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerChoice, computerChoice) {
    if (isWinner()) { return };
    clearMessages();
    displayPlayerChoice(playerChoice);
    addMessageText(`ROUND ${round}`);
    addMessageText(`Player chose ${playerChoice} and computer chose ${computerChoice}.`)



    if (playerChoice === computerChoice) {
        addMessageText('Tie.');
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
        addMessageText(`${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`)
        addMessageText('You win!');
        playerScore++;
        setScores();
    } else {
        addMessageText(`${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}.`);
        addMessageText('You lose!');
        computerScore++;
        setScores();
    }
    addMessageText(`Current score: Player: ${playerScore}, Computer: ${computerScore}.`);


    if (isWinner()) {
        clearMessages();
        if (playerScore > computerScore ){
            addMessageText(`You Won! Thank you for playing!`);
        } else {
            addMessageText(`You Lost! Thank you for playing!`);
        }
    }
}

function isWinner() {
    return playerScore >= scoreLimit || computerScore >= scoreLimit;
}

function game() {

        resetRoundAndScores();
        //while (round <= 5) {
            playRound(getPlayerChoice(), getComputerChoice());
            round++;
        //}
        addMessageText('Final score:');
        addMessageText(`Player score ${playerScore}. Computer score ${computerScore}.`);
        if (playerScore > computerScore) {
            addMessageText('Congratulations, you win!');
        } else if (computerScore > playerScore) {
            addMessageText('Sorry, you lose.');
        } else {
            addMessageText('It\'s a tie.');
        }


}


function setUpButtonEvents() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            getPlayerChoiceAndStartRound(button.getAttribute('data-choice'));
        });
    });
}

function getPlayerChoiceAndStartRound(choice) {
    playRound(choice, getComputerChoice());
}

setUpButtonEvents();
resetRoundAndScores();