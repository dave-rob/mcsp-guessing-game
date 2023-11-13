function play() {
  //creat random number, Math.random returns num between 0 and 1.
  //1 is exclusive. 0 is inclusive. num is between 1 and 100.
  var num = Math.floor(Math.random() * 100) + 1;
  //console.log(num);
  while (true) {
    var guess = prompt("Guess a number between 1 and 100.");

    if (guess == num) {
      alert("Correct!");
      break;
    } else {
      alert("Wrong!");
      break;
    }
  }
}

play();
