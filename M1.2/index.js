let secretNumber;
let lastGuess;
let guessesRemaining = 10;
let userInput;
let userGuessed;
let countGuessed = 0;

const CORRECT_MESSAGE = "Correct! You must be a powerful psychic.";
const GAMEOVER_MESSAGE = "Game over! You are merely a normal human. The secret number was ";
const HIGH_MESSAGE = "Your guess is too high.";
const LOW_MESSAGE = "Your guess is too low.";

function generateNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num = generateNumber(1, 10);

function checkIsCorrect() {
  if (userGuessed === num) {
    return true;
  } else {
    return false;
  }
}

function makeGuess() {
  if (!secretNumber) {
    secretNumber = generateNumber(1, 10);
  }

  userInput = parseInt(prompt("Please enter a number:"));

  while (isNaN(userInput) || userInput < 1 || userInput > 10) {
    userInput = parseInt(prompt("Please re-enter a number between 1 and 10:"));
  }

  userGuessed = userInput;
  lastGuess = userGuessed;
  countGuessed++;

  guessesRemaining--;

  updatePage();
}

function resetGame() {
  secretNumber = null;
  lastGuess = null;
  guessesRemaining = 10;
  userInput = null;
  userGuessed = null;
  countGuessed = 0;
  setTimeout(() => {
    secretNumber = generateNumber(1, 10);
    makeGuess();
  }, 1000); // Auto restart the game after 1 second
}

function updatePage() {
  document.getElementById("last-guess").innerHTML = lastGuess;
  const correct = document.getElementById("correct");
  const isCorrect = checkIsCorrect();
  if (isCorrect) {
    correct.innerHTML = CORRECT_MESSAGE;
    resetGame();
  } else if (guessesRemaining === 0) {
    correct.innerHTML = GAMEOVER_MESSAGE + secretNumber;
    resetGame();
  } else {
    if (userGuessed > secretNumber) {
      correct.innerHTML = HIGH_MESSAGE;
    } else {
      correct.innerHTML = LOW_MESSAGE;
    }
  }
  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("guess-count").innerHTML = countGuessed;
  
}