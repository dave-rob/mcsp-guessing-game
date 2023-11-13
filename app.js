  //creat random number, Math.random returns num between 0 and 1.
  //1 is exclusive. 0 is inclusive. num is between 1 and 100.

  //global variables
  var num = Math.floor(Math.random() * 100) + 1;
  var currentPlayer;
  var guessCount = 0;
  var players = {};

//function to compare score of players previous attempts if they have any.
  function compareScore(name, score){
    if (players[name] != undefined){
        if(score < players[name]){
            alert(`Congratulations ${name}! You beat your current score by ${players[name] - score} guesses!`);
            players[name] = score;
        } else{
            alert(`Congratulations ${name}! You did better previously by ${score - players[name]} guesses!`)
        }
    } else {
        alert(`${name}, you solved it in ${score} guesses!`)
        players[name] = score;
    }
  }

//function to ask for a number and increase guess count
  function game(){
    guessCount +=1;
     var guess = prompt("Guess a number between 1 and 100.");
    play(guess);
  }

  //Will they play again?
  function playAgain(){
    var response = prompt("Would you like to play again?");
    if (response == "yes" || response == 'y' || response == "Yes" || response == "Y"){
        guessCount=0;
        num = Math.floor(Math.random() * 100) + 1;
        willTheyPlay();
    } else {
        alert("Have a good day!")
    }
  }

  //See if they are right or need to guess again.
 function play(guess) {

        if (guess == '' || guess == null){
         alert("Have a good day!");   
         //break;
        } else if (guess == num){
            compareScore(currentPlayer, guessCount); 
            playAgain();
        } else if (guess > num){ 
            alert(`Sorry ${currentPlayer}, guess lower!`);
            game();
        } else{
            alert(`Sorry ${currentPlayer}, guess Higher!`);
            game();
        }

  }

  //function to see if they enter in name or not. If no name or cancel button they arent going to play
  function willTheyPlay(){
    //add while(true) to make page load up while running js
    while(true){
       currentPlayer = prompt("What is your name?")
    if (currentPlayer == '' || currentPlayer == null){
        alert("have a good day!");
        break;
    } else { 
       game(); 
       break;
    } 
    }
    
  }

willTheyPlay();