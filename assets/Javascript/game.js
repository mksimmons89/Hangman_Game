// event handler
window.onload = function() {


// Establish array of wordbank words to use for multiple games
var wordBank = ["lasagna", "hamburger", "cheese", "chicken", "steak", "jello", "asparagus", "meatloaf"];

var numWords = wordBank.length;

var wins = 0; //Starts game with 0 points
var loss = 0; //Ends when user losses
var guessWrong = [];
var guessRight = [];
var guessLeft = 10;
var userGuesses = []; //User Guesses
var underScores = []; //Pushes the Underscores
var randomWord;

// random word selector
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// console.log(randomWord);

// create new variable that takes the radom word selected and puts it into an arry
var randomWordSplit = Array.from(randomWord)
console.log(randomWordSplit);


// for loop to select word
for (var i = 0; i < randomWord.length; i++) {
  // console.log(wordBank[i]);
underScores.push('_');
// how to take members of array and convert to

}
document.getElementById('current_word').textContent = underScores.join(" ");

// getting user's inputs letters
document.onkeyup = function(event){
var KeyPressed= event.key;

  for (var i = 0; i < randomWord.length; i++) {

    console.log(randomWord[i]);
  }

}

}










// Now we have to capture the user's guess:
// document.addEventListener('keypress', (event) {
//   console.log(event)
//
// // Convert keycode into a letter
//   var KeyWord = String.fromCharCode(event.keyCode);
//
// // if user's guess is right
// if (randomWord.Indexof(KeyWord> -1){
//
// // add right words to array
//   rightWord.push(keyWord);
//
// // replace underscore with correct letter
//   underScores[randomWord.indexof[(keyWord)] = keyWord;
// }
//
//   // Skip this step until instructed below (we are replacing underscore with right letter:
//   	docUnderScore[0].innerHTML = underScore.join(' ');
//   	docRightGuess[0].innerHTML = guessRight;
//
//
//   // check to see if use work matches guesses
//   	if (underScore.join('')) == chosenWord) {
//   	alert('You Win');
//
//
// If wrong word exists, it will push to wrong word array
// 	else{
// 		wrongWord.push(keyWord);
// 		docWrongGuess[0].innerHTML = wrongWord;
//
//   }
// 	});
//
//
// // DOM Manipulaton. We're going to fill up our HTML with underscores. You can add this stuff where you established your variables initially, right before your for loop:
// 	var docUnderScore = document.getElementsByClassName('underScores');
// 	var docRightGuess = document.getElementsByClassName('guessWrong');
// 	var docWrongGuess = document.getElementsByClassName ('guessRight');

// GO to docUnderScore and docRightGUess mentioned above, we are now replacing underscore with right letter.
//
//
// DOne forget to add you javascript tag to the bottom of your html code.
//
