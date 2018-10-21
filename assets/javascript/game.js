var wins = 0;
var losses = 0;
var guess = 9;
var array = [];
var lettersGuessed = [];
var fruits = ["apple", "mango", "banana", "kiwi", "dragonfruit", "pineapple", "pomegranite"];
var vegetables = ["lettuce", "onion", "cabbage", "celery", "kale", "cucumbers", "carrot", "broccoli"];
var animals = ["dog", "cat", "tiger", "lion", "seal", "giraffe", "eagle", "vulture", "turtle"];
var word = "colorado";
//==========Game start==========//
document.getElementById("button").addEventListener("click", function () {
    categories();
    // if (array.length != 0) {
    //     alert("initialize");
    //     initialize();
    //     document.onkeyup = function (event) {
    //         var letter = event.key.toLowerCase();
    //         if (event.which >= 65 && event.which <= 90) {                   //If condition to make sure that key thats pressed is alpha
    //             if (lettersGuessed.includes(letter)) {
    //                 alert("you already guessed this letter");
    //             }
    //             else {
    //                 updateword(letter);
    //             }
    //         }
    //         displayStats();

    //         if (guess === 0) {
    //             alert("YOU LOSE:(")
    //             promptReset();
    //         }
    //         if (word === newWord) {         // IF THEY GUESS LAST LETTER ON LAST GUESS, THEN GLITCH HAPPENS. FIX ME
    //             updateword();
    //             document.getElementById("word").innerText = newWord;
    //             alert("you win!!:D")
    //             promptReset();
    //         }
    //     }
    // }
});

function updateword(letter) {
    newWord = "";
    var secondString = "";
    lettersGuessed.push(letter);
    guess--;
    for (i = 0; i < word.length; i++) {
        if (lettersGuessed.includes(word.charAt(i))) {
            secondString = word.charAt(i);
            newWord = newWord.concat(secondString);
        }
        else {
            newWord = newWord.concat("_ ");
        }
    }
    document.getElementById("word").innerHTML = newWord;
}
function updateWord(letter) {
    newWord = "";
    var secondString = "";
    for (var i = 0; i < word.length; i++) {                   //Checks each letter of the word
        for (var j = 0; j < lettersGuessed.length; j++) {      //Checks each index of the lettersGuessed array
            if (word.charAt(i) === lettersGuessed[j]) {
                secondString = lettersGuessed[j];
                newWord = newWord.concat(secondString);
                // letterPresent = true;
                break;
            }
            else if (j === lettersGuessed.length - 1) {
                newWord = newWord.concat("_ ");
            }
        }
    }
    document.getElementById("word").innerHTML = newWord;
}
function categories() {
    document.getElementById("header").innerHTML = "Pick your Category";
    document.getElementById("buttons").innerHTML = "<button id='fruits'>fruit</button><button id='vegetables'>vegetables</button><button id='animals'>animals</button>"
    document.getElementById("fruits").addEventListener("click", function () {
        array = fruits;
        document.getElementById("header").innerHTML = "Categories: Fruits";
        runGame();
    });
    document.getElementById("vegetables").addEventListener("click", function () {
        array = vegetables;
        document.getElementById("header").innerHTML = "Categories: Vegetables";
        runGame();
    });
    document.getElementById("animals").addEventListener("click", function () {
        array = animals;
        document.getElementById("header").innerHTML = "Categories: Animals";
        runGame();
    });
}
function runGame() {
    if (array.length != 0) {
        initialize();
        document.onkeyup = function (event) {
            var letter = event.key.toLowerCase();
            if (event.which >= 65 && event.which <= 90) {                   //If condition to make sure that key thats pressed is alpha
                if (lettersGuessed.includes(letter)) {
                    alert("you already guessed this letter");
                }
                else {
                    updateword(letter);
                }
            }
            displayStats();

            if (guess === 0) {
                alert("YOU LOSE:(")
                promptReset();
            }
            if (word === newWord) {         // IF THEY GUESS LAST LETTER ON LAST GUESS, THEN GLITCH HAPPENS. FIX ME
                updateword();
                document.getElementById("word").innerText = newWord;
                alert("you win!!:D")
                promptReset();
            }
        }
    }
}
function initialize() {
    pickWord();
    lettersGuessed = [];
    guess = 9;
    displayStats();
    var newWord = "";
    for (var i = 0; i < word.length; i++) {
        newWord = newWord.concat("_ ")
    }
    document.getElementById("word").innerHTML = newWord;
}
function displayStats() {
    document.getElementById("sidebar").innerHTML = "Wins: " + wins + "<br>Losses: " + losses + "<br>Guesses left: " + guess + "<br>Letters guessed: <br>" + lettersGuessed;
}
function pickWord() {
    word = array[Math.floor(Math.random() * array.length)];
}
function promptReset() {
    var gameOver = confirm("start new game?");
    if (gameOver) {
        initialize();
    }
    else { document.write(":(") }
}