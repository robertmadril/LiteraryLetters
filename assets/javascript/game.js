
//holds array of potential mystery words

var words = ["donquixote", "emma", "callofthewild", "thegreatgatsby", "nineteeneightyfour", "lordoftherings", "ontheroad"];
//image array
var images = ["assets/images/donquixote.jpg", "assets/images/emma.jpg", "assets/images/callofthewild.jpg", "assets/images/greatgatsby.jpg", "assets/images/1984.jpg", "assets/images/lotr.jpg", "assets/images/ontheroad.jpg"]
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
var openBook = document.getElementById("open-book");
var closedBook = document.getElementById("closed-book");
var changeImage = document.getElementById("change-img");

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
        blankArr.push(" _ ");
    };
};

function checkWord(l) {
    for (var i = 0; i < numBlank; i++) {
        if (randomWord[i] === l) {
            blankArr[i] = l;
        }
    }
};

function checkWin() {
    if (randomWord === blankArr.join("")) {
        //display 'you ran out of guesses and display answer.
        winCount = winCount + 1;
        bookCover();
        //starts new game, keeps win/loss
        newGame();

    };
}

function checkLoss() {
    //checks if guess count is at zero
    if (guessCount < 1) {
        //display 'you ran out of guesses and display cover.
        lossCount = lossCount + 1;
        //starts new game, keeps win/loss
        bookCover();
        newGame();
    };
}

function keepScore() {
        //displays array without commas with .join method
        guessWordText.textContent = blankArr.join("");
        winsText.textContent = "Wins: " + winCount;
        lossesText.textContent = "Losses: " + lossCount;
        startPage.textContent = ""
        guessString.textContent = guesses;
        guessCountText.textContent = "You have " + guessCount + " guesses remaining.";
}

function indBookCover() {
    for (i = 0; i<words.length;i++) {
        if (words[i] === randomWord) {
            changeImage.src = images[i];
        }
    }
}

function bookCover() {
    indBookCover();
    if (guessCount < 1 || randomWord === blankArr.join("")) {
        openBook.style.display = "none";
        closedBook.style.display = "block";
    }
    else {
        openBook.style.display = "block";
        closedBook.style.display = "none";
    }
}

newGame();

document.onkeyup = function (event) {
    bookCover();
    //holds user input value
    var userGuess = event.key.toLowerCase();
    //checks for a correct key answer
    if (randomWord.indexOf(userGuess) > -1) {
        //inserts correct userGuess into blankArray
        checkWord(userGuess);
        //checks if word is complete
    };

    //checks for incorrect key stroke
    if (randomWord.indexOf(userGuess) === -1) {
        //adds incorrect letter to empty guess array
        guesses.push(userGuess);
        //reduces guess count by 1
        guessCount--;
    }
    checkLoss();
    checkWin();
    keepScore();

};

/* Want

add specific book covers to each book-close
add spaces

*/