
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
    //resets guess count to 10
    guessCount = 10;
    //resets guess array to blank
    guesses = [];
    //resets random word array to blank
    blankArr = [];
    //uses randomize function to pull a word randomly from words array
    randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    //splits random word into individual letters
    ranWordLetters = randomWord.split("");
    //holds value for number of letters in array
    numBlank = ranWordLetters.length;
    for (i = 0; i < numBlank; i++) {
        blankArr.push(" _");
    };
};

function checkWord(l) {
    for (var i = 0; i < numBlank; i++) {
        if (randomWord[i] === l) {
            blankArr[i] = l;
        }
    }
}

newGame();

document.onkeyup = function (event) {

    //holds user input value
    var userGuess = event.key.toLowerCase();
    //checks for a correct key answer
    if (randomWord.indexOf(userGuess) > -1) {
        //inserts correct userGuess into blankArray
        checkWord(userGuess);
        //checks if word is complete
        if (randomWord === blankArr.join("")) {
            //display 'you ran out of guesses and display answer.
            alert("You Won!");
            winCount = winCount + 1;
            //starts new game, keeps win/loss
            newGame();

        };
    }

    //checks for incorrect key stroke
    if (randomWord.indexOf(userGuess) === -1) {
        //adds incorrect letter to empty guess array
        guesses.push(userGuess);
        //reduces guess count by 1
        guessCount--;
        //checks if guess count is at zero
        if (guessCount < 1) {
            //display 'you ran out of guesses and display answer.
            alert("You lost :(")
            lossCount = lossCount + 1;
            //starts new game, keeps win/loss
            newGame();
        };
    }

    //test

    //displays array without commas with .join method
    guessWordText.textContent = blankArr.join("");
    winsText.textContent = "Wins: " + winCount;
    lossesText.textContent = "Losses: " + lossCount;
    startPage.textContent = ""
    guessString.textContent = guesses;
    guessCountText.textContent = "You have " + guessCount + " guesses remaining.";

};

/* Want

Add start button

*/