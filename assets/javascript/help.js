		
		//global vars
		var wins = 0;
		var losses = 0;
		var guessesLeft = 9;
		var allGuesses=[];
		var i=0;

		

		//create an array of chars
		var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

		//pick a random letter from the letters array
		var randomLetter = letters[Math.floor(Math.random()*letters.length)];
		console.log("initial letter: "+randomLetter);
		

		//enter a keystroke/guess
		document.onkeyup= function(event){
			
			var key = event.key;
			//temporary console checker
			allGuesses[i]=key;
			i++;
			
			//keeps track of incorrect entries
			var guesses = document.getElementById("guesses");

			guesses.innerHTML = "Your Guesses so far: " + allGuesses;

			//decriments guesses you have left
			if(key=="a"||key=="b"||key=="c"||key=="d"||key=="e"||key=="f"||key=="g"||key=="h"||key=="i"||key=="j"||key=="k"||key=="l"||key=="m"||key=="n"||key=="o"||key=="p"||key=="q"||key=="r"||key=="s"||key=="t"||key=="u"||key=="v"||key=="w"||key=="x"||key=="y"||key=="z"){

				if(key!=randomLetter){
					guessesLeft--;

					var counter = document.getElementById("guessesLeft");

					counter.innerHTML = "Guesses Left: " + guessesLeft;
				}

				//win
				else{
					wins++;

					var winner = document.getElementById("wins");

					winner.innerHTML = "Wins: " + wins;

					gameReset();
				}

				if(guessesLeft==0){
					//when you lose a game
					losses++;

					var lose = document.getElementById("losses");

					lose.innerHTML = "Losses: " + losses;
					gameReset();
				}

				//Resets guesses left and picks a new random letter to choose from
				function gameReset(){

					//reset guesses 
					guessesLeft=9;
					var counter = document.getElementById("guessesLeft");
					counter.innerHTML = "Guesses Left: " + guessesLeft;
					//reset random letter
					randomLetter = letters[Math.floor(Math.random()*letters.length)];
					//reset Guesses
					allGuesses=[];
					i=0;
					//test
					console.log(randomLetter);

				}
			}

		}