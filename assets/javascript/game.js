var wins = 0;
var losses = 0;
var guess = 9;
var array = [];
var lettersGuessed = [];
var word = "envelope";
//==========Game start==========//
document.getElementById("button").addEventListener("click", function () {
    initialize();

    document.onkeyup = function (event) {
        var letter = event.key.toLowerCase();
        console.log(letter);
        if (event.which >= 65 && event.which <= 90) {   //If condition to make sure that key thats pressed is alpha
            lettersGuessed.push(letter);
            updateWord(letter);
        }
        guess--;
        displayStats();
        if(guess===0){
            alert("YOU LOSE:(")
            promptReset();
        }
        if(word===newWord){
            alert("you win!!:D")
            promptReset();
        }
    }
});


function updateWord(letter) {
    newWord="";
    var secondString="";
    for(var i=0; i<word.length; i++){                   //Checks each letter of the word
        for(var j=0; j<lettersGuessed.length;j++){      //Checks each index of the lettersGuessed array
            if(word.charAt(i)===lettersGuessed[j]){
                secondString=lettersGuessed[j];
                newWord = newWord.concat(secondString);
                // letterPresent = true;
                break;
            }
            else if(j===lettersGuessed.length-1){
                newWord = newWord.concat("_ ");
            }
        }
    }
    console.log(newWord + "space" + secondString);
    document.getElementById("word").innerHTML = newWord;
}
function categories() {
    document.getElementById("header").innerHTML = "Pick your Category";
}

function initialize() {
    lettersGuessed=[];
    guess=9;
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
    word = Math.floor(Math.random() * 10);
}
function promptReset(){
    var gameOver = confirm("start new game?");
    if(gameOver){
        initialize();
    }
    else{document.write(":(")}
}


// WORK IN PROGRESS
function displayWord(word, array) {
    alert("displayword")
    for (var i = 0; i < word.length; i++) {
        var noLetter = true;
        for (var j = 0; j < array.length; j++) {
            if (word.charAt[i] === array[j]) {
                document.getElementById("word").appendChild(array[j]);
                noLetter = false;
                break;
            }
        }
        if (noLetter) {
            document.getElementById("word").appendChild("_");
        }
    }
}

