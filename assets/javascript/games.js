var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userText = document.getElementById("game");

 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var yourGuessesSoFar = [];
 var userGuess;


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	document.onkeyup = function(event) {

      // Determines which key was pressed.
      userGuess = event.key;
      //console.log("userGuess", userGuess);
      game()
      }

	function game(){
	//console.log("computerGuess", computerGuess);

		if (userGuess === computerGuess) {
			wins++;
			guessesLeft=9;
			yourGuessesSoFar=[];
			//alert("Wins: " + wins);
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

			//you won
		}
		// this is if they dont win and have guessLeft
		else if ((userGuess !== computerGuess)  && (guessesLeft > 0)) {
			//alert("Losses: " + losses);
			guessesLeft--;
			yourGuessesSoFar.push(userGuess);
			//console.log(yourGuessesSoFar);
				// console.log("guessesLeft", guessesLeft);
				// guessesLeft--;
				// console.log("guessesLeft", guessesLeft);
			}
			// this is if they lose
		else {
			losses++;
			guessesLeft=9;
			yourGuessesSoFar=[];
			//console.log("here");
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		}



	var html = "<p>Guess what letter I'm thinking</p>" +
	 "<p>Wins: " + wins + "</p>" +
	 "<p>Losses: " + losses + "</p>" +
	 "<p>Guesses Left: " + guessesLeft + "</p>" +
	 "<p>User Guess: " + userGuess + "</p>" +
	 "<p>Your Guesses So Far: " + yourGuessesSoFar + "</p>";

	 //document.querySelector('#game').innerHRML=html;
	  userText.innerHTML = html;

}
