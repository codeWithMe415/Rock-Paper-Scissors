// This will prompt the user for their choice of Rock, Paper, Scissors.
let userChoice = prompt('Please select either, Rock, Paper, or Scissors');
const usersPick = userChoice.toLowerCase(); // stores users choice of rock, paper, scissor and stores it lowercased

function userOption() {
    if (usersPick === 'rock') {
        console.log('You: rock');
    } else if (usersPick === 'paper') {
        console.log('You: paper');
    } else if (usersPick === 'scissors') {
        console.log('You: scissors');
    } else {
        console.log('Invalid input, please select a valid option.');
        return null;
    }

}

// Computer choice generation
let computerRandomNumber = Math.floor(Math.random() * 3);

function getComputerChoice() {
    if (computerRandomNumber === 0) {
        return 'Computer: rock';
    } else if (computerRandomNumber === 1) {
        return 'Computer: paper';
    } else if (computerRandomNumber === 2) {
        return 'Computer: scissors';
    } else {
        return 'Error'
    }
}
userOption(userChoice);
console.log(getComputerChoice());
// Logic for game rounds
let totalGameRounds = 5;
let userGameScore = 0;
let computerGameScore = 0;

for (let currentGameRound = 1; currentGameRound <= totalGameRounds; currentGameRound++) {
    if (usersPick === 'rock' && computerRandomNumber === 0) {
        console.log('Tie')
    } else if (usersPick === 'rock' && computerRandomNumber === 1) {
        console.log('You lose'), computerGameScore += 1;
    } else if (usersPick === 'rock' && computerRandomNumber === 2) {
        console.log('You win!'), userGameScore += 1;
    } else if (usersPick === 'paper' && computerRandomNumber === 0) {
        console.log('You win!'), userGameScore += 1;
    } else if (usersPick === 'paper' && computerRandomNumber === 1) {
        console.log('Tie')
    } else if (usersPick === 'scissors' && computerRandomNumber === 2) {
        console.log('You lose'), computerGameScore += 1;
    } else if (usersPick === 'scissors' && computerRandomNumber === 0) {
        console.log('You lose'), computerGameScore += 1;
    } else if (usersPick === 'scissors' && computerRandomNumber === 1) {
        console.log('You win!'), userGameScore += 1;
    } else if (usersPick === 'scissors' && computerRandomNumber === 2) {
        console.log('Tie')
    }
    // Game logic will go here
}

