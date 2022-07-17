

// TODO: Refactor to remove global variables.
// TODO: Fix prompting and console.log making it difficult for the player to see what's happening
//       in the game until the whole game is over.

const choices = ['rock', 'paper', 'scissors'];
let round;
let playerScore;
let computerScore; 

function resetRoundAndScores() {
    round = 1;
    playerScore = 0;
    computerScore = 0;
}

function getPlayerChoice() {
    let playerInput;

    while (!playerInput) {
        playerInput = prompt('Chose rock, paper, or scissors').toLowerCase();
        if (!choices.includes(playerInput)) {
            console.log(`You typed ${playerInput}. That is not a valid choice. Please choose again.`);
            playerInput = false;
        } else {
            console.log(`Your choice: ${playerInput}`);
        }
    }
    return playerInput;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerChoice, computerChoice) {
    console.log(`ROUND ${round}`);
    console.log(`Player chose ${playerChoice} and computer chose ${computerChoice}.`)
    if (playerChoice === computerChoice) {
        console.log('Tie.');
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`${playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`)
        console.log('You win!');
        playerScore++;
    } else {
        console.log(`${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}.`);
        console.log('You lose!');
        computerScore++;
    }
    console.log(`Current score: Player: ${playerScore}, Computer: ${computerScore}.`);
}

function game() {
    resetRoundAndScores();
    while (round <= 5) {
        playRound(getPlayerChoice(), getComputerChoice());
        round++;
    }
    console.log('Final score:');
    console.log(`Player score ${playerScore}. Computer score ${computerScore}.`);
    if (playerScore > computerScore) {
        console.log('Congratulations, you win!');
    } else if (computerScore > playerScore) {
        console.log('Sorry, you lose.');
    } else {
        console.log('It\'s a tie.');
    }
    console.log(`Thank you for playing!`);
}

game();