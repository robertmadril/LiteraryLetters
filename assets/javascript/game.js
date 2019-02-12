
//holds array of potential mystery words

var words = ["booksalot", "bok", "sirbookington", "bookabilly"];
//holds initial win/loss counts
var winCount = 0;
var lossCount = 0;
//holds initial guess count
var guessCount = 10;
//empty array to hold mistaken guesses
var guesses = [];
var numBlank = 0;
var blankArr = [];
var randomWord = "";

//connect variable to html id
var guessWordText = document.getElementById("guess-word");
var guessCountText = document.getElementById("guess-cnt");
var winsText = document.getElementById("win-cnt");
var lossesText = document.getElementById("loss-cnt");
var startPage = document.getElementById("start");
var solved = document.getElementById("answer");
var guessString = document.getElementById("guess-strng");


//function starts new game while keeping win/loss count
function newGame() {
    guessCount = 10;
    guesses = [];
    blankArr = [];
    //uses randomize function to pull a word randomly from words array
    randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    //splits mystery word into individual letters
    ranWordLetters = randomWord.split("");
    numBlank = ranWordLetters.length;
    for (i = 0; i < numBlank; i++) {
        blankArr.push(" _");
    };
};

newGame();

document.onkeyup = function (event) {

        //holds user input value
        var userGuess = event.key.toLowerCase();

        if (randomWord.indexOf(userGuess) > -1) {
            randomWord[randomWord.indexOf(userGuess)] = userGuess;
            blankArr.push(userGuess)

            if (randomWord === blankArr) {
                //display 'you ran out of guesses and display answer.
                winCount = winCount + 1;
                //starts new game, keeps win/loss
                newGame();

            };
        }


        if (randomWord.indexOf(userGuess) === -1) {
            guesses.push(userGuess);
            guessCount--;

            if (guessCount < 1) {
                //display 'you ran out of guesses and display answer.
                lossCount = lossCount + 1;
                //starts new game, keeps win/loss
                newGame();
            };
        }

        //test
        console.log(guesses);
        console.log(userGuess);

        guessWordText.textContent = blankArr;
        winsText.textContent = "Wins: " + winCount;
        lossesText.textContent = "Losses: " + lossCount;
        startPage.textContent = ""
        guessString.textContent = guesses;
        guessCountText.textContent = "You have " + guessCount + " guesses remaining.";



    };



/*
NEED
Win functionality
get rid of commas in array
input more than one of the same char
input characters in correct location
*/