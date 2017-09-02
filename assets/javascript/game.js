
// Creating global variables 

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessList = [];

//We want to give the computer an array of options to choose from randomly

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Creating a formula that will allow the computer to choose from the list of options randomly

    var computerChoice = options[Math.floor(Math.random() * options.length)];

//Console.log to see if working
    console.log("initial letter " + computerChoice);

//We want to capture what the user is actually pressing on the keyboard and put into guessList array
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessList.push(userGuess);
  
//Test with console.log to see if working
    console.log("Current Guess: " + userGuess + " All Guesses: " + guessList);

 
/*If then if user guesses correctly or not.  It will tally a win and reset or it
will subtract a guess */
    if (userGuess === computerChoice) {
        wins++;
        alert("You Win!!!");
        console.log("Wins: " + wins);
        gameReset();
    } else {
        guessesLeft--;
        console.log("Guesses left: " + guessesLeft);

    }
    //here I tally a loss when there are no guesses left
    if (guessesLeft === 0) {
        losses++;
        alert("Out of chances. Try again.")
        gameReset();
    }

    
    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
        "<h1>Psychic Game" + "</h1>" + 
        "<p>Press any letter" + "</p>" +
        "<p>You chose: " + guessList + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" + 
        "<p>Guesses Left: " + guessesLeft + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;

}

//Game reset function  Need to reset guesses left and computer choice.
    function gameReset() {
       //resets guesses left
       guessesLeft = 9;
       //resets userGuess array to 0
       guessList = [];
       //resets random letter
       computerChoice = options[Math.floor(Math.random() * options.length)];              
              console.log("Next computer pick: " + computerChoice);
                }