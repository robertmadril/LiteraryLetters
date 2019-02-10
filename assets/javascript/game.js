
//holds array of potential mystery words

var words = ["booksalot", "book", "sirbookington", "bookabilly"];
//holds initial win/loss counts
var winCount = 0;
var lossCount = 0;
//holds initial guess count
var guessCount = 10;
//empty array to hold mistaken guesses
var guesses = [];
//uses randomword() function to pull a mystery word randomly from words array
var randomWord = randomize(words)
var mystWord = randomWord.toLowerCase();
//splits mystery word into individual letters
var displayWord = mystWord.split("");


var guessWordText = document.getElementById("guess-word");
var guessCountText = document.getElementById("guess-cnt");
var winsText = document.getElementById("win-cnt");
var lossesText = document.getElementById("loss-cnt");



function randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)].toUpperCase()
};


function blankSpace(ar) {
    for (i = 0; i < ar.length; i++) {
        return " _ ";
    }
};

function restartFull() {
    winCount = 0;
    lossCount = 0;
    guessCount = 10;
    guesses = [];
};

function newGame() {
    guessCount = 10;
    guesses = [];
    randomWord = randomize(words)
    mystWord = randomWord.toLowerCase();
}

//test functioning
console.log(displayWord);
console.log(blankSpace(mystWord));
console.log(mystWord);



document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();
    var answerWord = [];


    if (mystWord.indexOf(userGuess) > -1) {
        console.log(userGuess);
        /* answerWord.push(userGuess);
         if (randomWord.indexOf(answerword) !== -1) {
             winCount++;
             alert("You Won"); */

    };


    if (mystWord.indexOf(userGuess) === -1) {
        console.log("Incorrect guess");
        guesses.push(userGuess);
        guessCount--;

        if (guessCount === 0) {
            //display 'you ran out of guesses and display answer.
            lossCount = lossCount + 1;
            //starts new game, keeps win/loss
            newGame();
            console.log(randomWord);
        };
    }

    //test
    console.log(guesses);
    console.log(guessCount);
    console.log(userGuess);

    //Display appropriate number of blank lines on screen, or input

    //guessWordText.textContent = "You chose: " + userGuess;
    guessCountText.textContent = "You have " + guessCount + " guesses remaining.";
    winsText.textContent = "Wins: " + winCount;
    lossesText.textContent = "Losses: " + lossCount;
};


/*
NEED
Way to restart to new game, without restarting loss/wins
Way to restart to new game when no guesses are left, show word.
display blank letters
fill correct guesses into right spaces
*/