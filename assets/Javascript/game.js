// event handler
window.onload = function() {


// Establish array of wordbank words to use for multiple games
var wordBank = ["santa", "presents", "wreath", "christmas", "sleigh", "stocking", "reindeer", "snowflake"];

// var numWords = wordBank.length;

var wins = 0; //Starts game with 0 points
var loss = 0; //Ends when user losses
var guessWrong = [];
// var guessRight = [];
var guessLeft = 10; //User Guesses
var underScores = []; //Pushes the Underscores
var randomWord;
var wrongLetter = [];
var keyPressed = [];
// var endGame =

// random word selector
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// console.log(randomWord);

// create new variable that takes the radom word selected and puts it into an arry which splits it up into individual characeters
var randomWordSplit = Array.from(randomWord);
// console.log(randomWordSplit);


// create underscore varible per random word selected
for (var i = 0; i < randomWord.length; i++) {
  // console.log(wordBank[i]);
underScores.push('_');


}
  //Print underScores to screen


// getting user's inputs letters
document.onkeyup = function(event){

var keyPressed = event.key;

//Checking if letter exist inside the word
if(randomWord.indexOf(keyPressed) > -1)
{


  for (var i = 0; i < randomWordSplit.length; i++) {

    // console.log(randomWordSplit[i]);


// if else statement now...we are saying now that if randomwordsplit =key pressed, we want to write the correct letters (thus far) in the corect word blank in out htmll
    if (randomWordSplit[i] === keyPressed)
    {
      underScores[i] = keyPressed; //underScores is equal to userGuesses
      // console.log(underScores);
    }
  }
} //If wrong then push the user's lives decrease
else {
    if (guessLeft > 0) {
    // endGame ();
// }
wrongLetter.push(keyPressed);
guessLeft--;

//   console.log("guesses left" + guessLeft);t
}
var randomWordSplitString = randomWordSplit.join(" ")
// console.log(randomWordSplitString)
var underScoresString = underScores.join(" ")
// console.log(underScoresString)
if (randomWordSplitString === underScoresString){
  alert("you win")
  wins ++
}


 else{
   alert("Game over. Play again. I need this.")
   loss++;
 }
}
//Input guesses on DOM
// document.write(keyPressed).textContent = guessLeft;
// console.log("You have " + guessLeft + " left");

document.getElementById("gameWinCounter").innerHTML = wins;
document.getElementById("current_word").innerHTML = underScores.join(" ");
document.getElementById("guessesRemain").innerHTML = guessLeft; //only do a join if you're working with items in an array
document.getElementById("incorrectGuesses").innerHTML = wrongLetter.join(" ");
}
}
