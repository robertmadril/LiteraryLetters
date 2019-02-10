
//holds array of potential mystery words
var words = ["booksalot", "book", "sirbookington", "bookabilly"]
//holds initial win/loss counts
var winCount = 0;
var lossCount = 0;
//holds initial guess count
var guessCount = 10;
//empty array to hold mistaken guesses
var guesses = [];
//uses randomword() function to pull a mystery word randomly from words array
var mystWord = randomWord(words);
//splits mystery word into individual letters
var displayWord = mystWord.split("");


var guessWordText = document.getElementById("guess-word");
var guessCountText = document.getElementById("guess-cnt");
var winsText = document.getElementById("win-cnt");
var lossesText = document.getElementById("loss-cnt");



function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)].toUpperCase()
};


function blankSpace(ar) {
    for (i=0; i<ar.length; i++) {
        return " _ ";
    }
};

//test functioning
console.log(displayWord);
console.log(blankSpace(mystWord));
console.log(mystWord);



document.onkeyup = function (event) {

            var userGuess = event.key;


            if (mystWord.indexOf(userGuess)>-1) {
                console.log("Correct guess");

            };


            if (mystWord.indexOf(userGuess)===-1) {
                console.log("Incorrect guess");
                guesses.push(userGuess);
                guessCount--;
            }

            //test
            console.log(guesses);
            console.log(guessCount);

                //Display appropriate number of blank lines on screen, or input

            //guessWordText.textContent = "You chose: " + userGuess;
            guessCountText.textContent = "You have " + guessCount + " guesses remaining.";
            winsText.textContent = "Wins: " + winCount;
            lossesText.textContent = "Losses: " + lossCount;
        };


        if (guessCount === 0) {
            //display 'you ran out of guesses and display answer.

            lossCount = lossCount + 1
        };


/*
NEED

when user completes full word display image of ____ and add to win count

create new word when user clicks 'new word'
*/