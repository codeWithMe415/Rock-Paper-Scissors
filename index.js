/*  TODO: If user gives an invalid selection, game stops and user has to input their choice again. Add a counter for
  draws
*/

let totalGameRounds = 5;
let userScore = 0;
let computerScore = 0;
let drawCount = 0;

for (let currentGame = 1; currentGame <= totalGameRounds; currentGame++) {
    console.log(`\nCurrent Game: --- ${currentGame} ---`);
    // This lets use get a new user choice each round
    let usersChoice;
    do {
        let promptUser = prompt('Please select either: rock, paper or scissors');
        usersChoice = promptUser ? promptUser.toLowerCase() : '';
        if (!['rock', 'paper', 'scissors'].includes(usersChoice)) {
            alert('Invalid input! Please enter rock, paper, or scissors.');
        }
    } while (!['rock', 'paper', 'scissors'].includes(usersChoice));

    // Generates a new computer choice each round
    let computerRandomNumber = Math.floor(Math.random() * 3);

    function usersOption() {
        if (usersChoice === 'rock') {
            console.log('\nYou selected: Rock');
        } else if (usersChoice === 'paper') {
            console.log('\nYou selected: Paper');
        } else if (usersChoice === 'scissors') {
            console.log('\nYou selected: Scissors');
        } else {
            console.log('\nError. Invalid input, please try again');
        }
    }

//Translates the computer choice to either rock, paper or scissors
    function getComputerChoice() {
        if (computerRandomNumber === 0) {
            return 'Computer selected: Rock';
        } else if (computerRandomNumber === 1) {
            return 'Computer selected: Paper';
        } else if (computerRandomNumber === 2) {
            return 'Computer selected: Scissors';
        }
    }

    usersOption();
    console.log(getComputerChoice());
// Game logic for human vs. computer choices.
// 0 = Rock, 1 = Paper, 2 = Scissors 
    if (usersChoice === 'rock' && computerRandomNumber === 0) {
        console.log('\nIt\'s a tie');
        alert('It\'s a tie! Computer selected: Rock');
        drawCount += 1;
    } else if (usersChoice === 'rock' && computerRandomNumber === 1) {
        console.log('\nSorry, you lose!');
        alert('You lost! Computer selected: Paper');
        computerScore += 1;
    } else if (usersChoice === 'rock' && computerRandomNumber === 2) {
        console.log('\nHell yeah, you won this one!');
        alert('You won! Computer selected: Scissors');
        userScore += 1;
    } else if (usersChoice === 'paper' && computerRandomNumber === 0) {
        console.log('\nHell yeah, you won this one!');
        alert('You lost! Computer selected: Rock');
        userScore += 1;
    } else if (usersChoice === 'paper' && computerRandomNumber === 1) {
        console.log('\nIt\'s a tie');
        alert('It\'s a tie! Computer selected: Paper');
        drawCount += 1;
    } else if (usersChoice === 'paper' && computerRandomNumber === 2) {
        console.log('\nSorry, you lose!');
        alert('You lost! Computer selected: Scissors');
        computerScore += 1;
    } else if (usersChoice === 'scissors' && computerRandomNumber === 0) {
        console.log('\nSorry, you lose!');
        alert('You lost! Computer selected: Rock');
        computerScore += 1;
    } else if (usersChoice === 'scissors' && computerRandomNumber === 1) {
        console.log('\nHell yeah, you won this one!');
        alert('You won! Computer selected: Paper');
        userScore += 1;
    } else if (usersChoice === 'scissors' && computerRandomNumber === 2) {
        console.log('\nIt\'s a tie');
        alert('It\'s a tie! Computer selected: Scissors');
        drawCount += 1;
    }
    console.log(`\n--- Current Score ---\n You: ${userScore}\n Computer: ${computerScore}\n Draws: ${drawCount}\n`);
}

console.log(`\nFinal Score - You: ${userScore}, Computer: ${computerScore}, Draws: ${drawCount}`);
if (userScore > computerScore) {
    console.log('You won the game!');
    alert('You won the game!');
} else if (userScore < computerScore) {
    console.log('You lost.. Better luck next time!');
    alert('You lost.. Better luck next time!');
} else {
    console.log('And it ends in a tie... How anticlimactic.');
    alert('And it ends in a tie... How anticlimactic.');
}