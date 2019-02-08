/*

vars holding array, random word from an Array, total win count to 3, total guess count to 10

*/

var words = ["r", "Book2", "Book3", "Book4"]
var winCount = 0;
var lossCount = 0;
var guessCount = 10;

var guessWordText = document.getElementById("guess-word");
var guessCountText = document.getElementById("guess-cnt");
var winsText = document.getElementById("win-cnt");
var lossesText = document.getElementById("loss-cnt");

//Display appropriate number of blank lines on screen

//var wordLength = ;
//var randomWord = "r";


//var randomWord = words[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (event) {

    var userGuess = event.key

    /*if user clicks correct key display letter in correct spot
    else display letter in 'letters used' and deduct one guess */

    if (words.indexOf(userGuess) > -1) {
        //display text in appropriate spot
    }
    else {
        guesscount = guessCount - 1
    }


    if (guessCount = 0) {
        //display 'you ran out of guesses and display answer.

        lossCount = lossCount + 1
    } 

    guessWordText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    tiesText.textContent = "Ties: " + ties;
}

/*
NEED

when user completes full word display image of ____ and add to win count

create new word when user clicks 'new word'
*/