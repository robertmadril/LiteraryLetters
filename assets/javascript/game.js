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

var displayWord = randomWord.length;

var mystWord = randomWord(words);

function randomWord(array) {
    return array[Math.floor(Math.random() * array.length)].toUpperCase()
};



//split prop to insert into set blank lines

function fillInWordWithLetter(letter, word) {
    return word.toLowerCase().split('').map(l => {
        if (l === letter) {
            return l.toUpperCase()
        }
        return '_'
    }).join(' ')
};




document.onkeyup = function (event) {

    if (event.key === "1") {

        console.log(mystWord);} }

document.onkeyup = function (event) {

            var userGuess = event.key;

            var mystWordLetter =  () => {
                for (i=0; i<mystWord.length; i++) {
                    return mystWord[i];
                }
            };

            if (event.key === mystWordLetter) {
                console.log(event.key);
            }

            fillInWordWithLetter(userGuess, mystWord);




            /*if user clicks correct key display letter in correct spot
            else display letter in 'letters used' and deduct one guess */

            if (mystWord.indexOf(userGuess) > -1) {

                for (i = 0; i < randomWord.length; i++) {
                    if (randomWord[i] === userGuess) {
                        console.log(words[i]);
                    }
                    else {
                        guesscount = guessCount - 1
                    }
                    //display text in appropriate spot
                }

                //Display appropriate number of blank lines on screen, or input

            };

            guessWordText.textContent = "You chose: " + userGuess;
            guessCountText.textContent = guessCount;
            winsText.textContent = "Wins: " + winCount;
            lossesText.textContent = "Losses: " + lossCount;
        };
        console.log(guessCount);


        if (guessCount = 0) {
            //display 'you ran out of guesses and display answer.

            lossCount = lossCount + 1
        };


/*
NEED

when user completes full word display image of ____ and add to win count

create new word when user clicks 'new word'
*/