// Create secretNumber
var secretNumber = 4;

// Ask user for guess
var guess = prompt("Guess a number");
guessNumber = Number(guess);
// Check if guess is right
if(guessNumber === secretNumber) {
  alert("You got it right!");
}
// Check if guess is higher
else if(guessNumber > secretNumber) {
  alert("Too high. Guess again!");
}
// Otherwise
else {
  alert("Too low. Guess again!");
}