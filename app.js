//creat random number, Math.random returns num between 0 and 1.
//1 is exclusive. 0 is inclusive. num is between 1 and 100.
//global variables
var num = Math.floor(Math.random() * 100) + 1;
//console.log(num);
var currentPlayer;
var guessCount = 0;

//set global variables then run function after load
document.onload = willTheyPlay();

//function to compare score of players previous attempts if they have any.
function compareScore(score) {
    var oldScore = localStorage.getItem(currentPlayer);
  if (oldScore != null) {
    if (score < oldScore) {
      alert(`Congratulations ${currentPlayer}! You beat your current score by ${oldScore - score} guesses!`);
      localStorage.setItem(currentPlayer, score);
    } else if (score == oldScore) {
      alert(`Congratulations ${currentPlayer}! You tied your high score!`);
    } else {
      alert(`Congratulations ${currentPlayer}! You did better previously by ${score - oldScore} guesses!`);
    }
  } else {
    alert(`${currentPlayer}, you solved it in ${score} guesses!`);
    localStorage.setItem(currentPlayer, score);
  }
}

//function to ask for a number and increase guess count
function game() {
  guessCount += 1;
  var guess = prompt("Guess a number between 1 and 100.");
  play(guess);
}

//Will they play again?
function playAgain() {
  var response = prompt("Would you like to play again?");
  if (response == null){
    alert("Have a good day!");
  }else if (response.toLowerCase() == "yes" || response.toLowerCase() == "y") {
    guessCount = 0;
    //resetting the num value
    num = Math.floor(Math.random() * 100) + 1;
    willTheyPlay();
  } else {
    alert("Have a good day!");
  }
}

//See if they are right or need to guess again.
function play(guess) {
  if (guess == "" || guess == null) {
    alert("Have a good day!");
  } else if (guess == num) {
    compareScore(guessCount);
    playAgain();
  } else if (guess > num) {
    alert(`Sorry ${currentPlayer}, guess lower!`);
    game();
  } else {
    alert(`Sorry ${currentPlayer}, guess Higher!`);
    game();
  }
}

//function to see if they enter in name or not. If no name or cancel button they arent going to play
function willTheyPlay() {
    currentPlayer = prompt("What is your name?");
    if (currentPlayer == "" || currentPlayer == null) {
      alert("have a good day!");
    } else {
      game();
    }
  }

