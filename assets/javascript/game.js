/*

pick a random word from an Array, total win count to 3, total guess count to 10

*/

var words = ["Book", "Book2", "Book3", "Book4"]

var winCount = 3;

var guessCount = 10;

Math.random(words);

/*

Display appropriate number of blank lines on screen

if user clicks correct key display letter in correct spot
    else display letter in 'letters used' and deduct one guess

if user's guesses reach 0, display 'you ran out of guesses and display answer.

when user completes full word display image of ____ and add to win count

create new word when user clicks 'new word'
*/