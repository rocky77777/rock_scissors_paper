$(document).ready(function() {


var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        results = "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            results = "rock wins";
        } else {
            results = "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            results = "paper wins";
        } else {
            results = "scissors wins";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            results = "scissors wins";
        } else {
            results = "rock wins";
        }
    }
};

compare(userChoice,computerChoice);

$("h1").text("Your choice: " + userChoice);
$("h2").text("Computer's choice: " + computerChoice);
$("h3").text("Result: " + results);


});
