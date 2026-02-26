'use strict';

function chooseNumUnder100() {
    return Math.ceil(Math.random() * 100);
}

let nGuess = 0;
let secretN = chooseNumUnder100();
let previousGuesses = [];

const feedbackBlock = document.querySelector('.border');
const guessInput = document.querySelector('#guess-input');
const guessResult = document.querySelector('#guess-result');
const numberChoice = document.querySelector('#number-choice');
const guessCount = document.querySelector('#nGuesses');
const previousGuessesBlock = document.querySelector('#previous-guesses');


document.querySelector('#guess').addEventListener('click', () => {
    let userGuess = Number(guessInput.value);
    previousGuesses.push(userGuess);

    previousGuessesBlock.innerHTML = `Previous Guesses: ${previousGuesses.join(', ')}`;

    if (guessInput.value === '') {
        alert('Please enter a number!');
        return;
    }

    if (isNaN(userGuess)) {
        alert('Please enter a valid number!');
        return;
    }

    nGuess++;
    numberChoice.innerHTML = `  `;
    guessCount.innerHTML = `Number of guesses: ${nGuess}`;


    if (userGuess === secretN) {
        guessResult.innerHTML = `Correct! You guessed ${secretN} in ${nGuess} guesses.`;
        guessInput.disabled = true;
        previousGuesses=[];
    } 
    else if (userGuess < secretN) {
        guessResult.innerHTML = `Too low! Try again.`;
    } 
    else {
        guessResult.innerHTML = `Too high! Try again.`;
    }

    guessInput.value = '';
});

document.querySelector('#reset').addEventListener('click', () => {
    nGuess = 0;
    secretN = chooseNumUnder100();

    guessInput.disabled = false;
    guessInput.value = '';

    guessResult.innerHTML = 'Awaiting a guess...';
    numberChoice.innerHTML = 'Choose a number to begin';
    guessCount.innerHTML = 'Number of guesses: 0';
    previousGuessesBlock.innerHTML = 'Previous Guesses:';
    previousGuesses=[];

    console.log('Game reset! Secret number:', secretN);
});
