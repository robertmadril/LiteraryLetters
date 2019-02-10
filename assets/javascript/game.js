
//holds array of potential mystery words

var words = ["booksalot", "bok", "sirbookington", "bookabilly"];
//holds initial win/loss counts
var winCount = 0;
var lossCount = 0;
//holds initial guess count
var guessCount = 10;
//empty array to hold mistaken guesses
var guesses = [];
//uses randomize function to pull a mystery word randomly from words array, starts by putting to lowercase
var randomWord = randomize(words)
var ranWordLower = randomWord.toLowerCase();
//splits mystery word into individual letters
var ranWordLetters = ranWordLower.split("");

//connect variable to html id
var guessWordText = document.getElementById("guess-word");
var guessCountText = document.getElementById("guess-cnt");
var winsText = document.getElementById("win-cnt");
var lossesText = document.getElementById("loss-cnt");
var startPage = document.getElementById("start");
var solved = document.getElementById("answer");



//randomize word choice
function randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)].toUpperCase()
};

//Function performs a full restart of the game
function restartFull() {
    winCount = 0;
    lossCount = 0;
    guessCount = 10;
    guesses = [];
};

//function starts new game while keeping win/loss count
function newGame() {
    guessCount = 10;
    guesses = [];
    randomWord = randomize(words)
    ranWordLower = randomWord.toLowerCase();

}

//test functioning
console.log(ranWordLower);
console.log(ranWordLetters.length);

//creates blanks

document.onkeyup = function (event) {

    if (event.key === "Enter") {
        //converts ranWordLetters into blank spaces
        for (i = 0; i < ranWordLetters.length; i++) {
            ranWordLetters[i] = " _";
        };

        //Displays blank lines, win and loss count
        guessWordText.textContent = ranWordLetters;
        winsText.textContent = "Wins: " + winCount;
        lossesText.textContent = "Losses: " + lossCount;
        startPage.textContent = ""

        document.onkeyup = function (event) {

            //holds user input value
            var userGuess = event.key.toLowerCase();

            if (ranWordLower.indexOf(userGuess) > -1) {
                ranWordLetters[ranWordLower.indexOf(userGuess)] = userGuess;

                if (ranWordLetters === ranWordLower) {
                    //display 'you ran out of guesses and display answer.
                    lossCount = lossCount + 1;
                    //starts new game, keeps win/loss
                    newGame();
                };
            }


            if (ranWordLower.indexOf(userGuess) === -1) {
                guesses.push(userGuess);
                guessCount--;

                if (guessCount === 0) {
                    //display 'you ran out of guesses and display answer.
                    lossCount = lossCount + 1;
                    //starts new game, keeps win/loss
                    newGame();
                };
            }

            //test
            console.log(guesses);
            console.log(userGuess);

            guessWordText.textContent = ranWordLetters;
            guessCountText.textContent = "You have " + guessCount + " guesses remaining.";
            lossesText.textContent = "Losses: " + lossCount;
            winsText.textContent = "Wins: " + winCount;


        };

    };
};


/*
NEED
Win functionality
Way to restart to new game, without restarting loss/wins after win.
Create new word after loss
get rid of commas in array
input more than one of the same char
*/