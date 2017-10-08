var inquirer = require("inquirer");
var Card = require("./BasicCards.js");
var Clozecard = require("./clozeCard.js");
playGame();

var firstElement = new Card(
	"What is the first Element on the periodic table?", "Hydrogen");

var states = new Card(
	"How many states are there in the United states?", "50");


var organelles = new Card(
	"What is the function of a mitochondria?", "To turn carbon sugar into ATP energy for the cell");

var fourteeners = new Card(
	"How many 14,000 foot peaks are there in Colorado?", "58");

var firstElementCloze = new Clozecard (
	"is the first element on the periodic table", "Hydrogen");

var organelleCloze = new Clozecard (
	"The function of the mitochondria is", "to turn carbon sugar into ATP energy for the cell");

var colorsCloze = new Clozecard (
	"The primary colors are", "Red, Yellow, Blue");


function playGame(){
	inquirer
		.prompt([
		{
			name: "play",
			type: "list",
			message: "Which version would you like to play?",
			choices: ["Easy", "Hard"]
		},
			]).then((answer) => {
				if(answer.play === "Easy"){
					firstCard();
				}else if(answer.play ==="Hard"){
					firstCardCloze();
				}
			});
}
function firstCardCloze(){
	console.log("..." + firstElementCloze.partialText);
	inquirer.prompt([
		{
			name: "back",
			type: "list",
			message: "Display Answer?",
			choices: ["Yes"]
		},
		]).then((ans) => {
			if(ans.back === "Yes"){
				console.log(firstElementCloze.cloze + " " + firstElementCloze.partialText);
				secondCardCloze();
			}
			else{
				console.log("Hmm?");
			}
		});
}
function secondCardCloze(){
	console.log(organelleCloze.partialText + "...");
	inquirer.prompt([
		{
			name: "back",
			type: "list",
			message: "Display Answer?",
			choices: ["Yes"]
		},
		]).then((ans) => {
			if(ans.back === "Yes"){
				console.log(organelleCloze.partialText + " " + organelleCloze.cloze);
				thirdCardCloze();
			}
			else{
				console.log("Hmm?");
			}
		});
}
function thirdCardCloze(){
	console.log(colorsCloze.partialText + "...");
	inquirer.prompt([
		{
			name: "back",
			type: "list",
			message: "Display Answer?",
			choices: ["Yes"]
		},
		]).then((ans) => {
			if(ans.back === "Yes"){
				console.log(colorsCloze.partialText + " " + colorsCloze.cloze);
				playGame();
			}
			else{
				console.log("Hmm?");
			}
		});
}


function firstCard() {
	console.log(firstElement.front);
	inquirer.prompt([
		{
			name: "back",
			type: "list",
			message: "Display Answer?",
			choices: ["Yes"]
		},
		]).then((ans) => {
			if(ans.back === "Yes"){
				console.log(firstElement.back);
				secondCard();
			}
			else{
				console.log("Hmm?");
			}
		});
}
function secondCard() {
	console.log(states.front);
	inquirer.prompt([
		{
			name: "back",
			type: "list",
			message: "Display Answer?",
			choices: ["Yes"]
		},
		]).then((ans) => {
			if(ans.back === "Yes"){
				console.log(states.back);
				thirdCard();
			}
			else{
				console.log("Hmm?");
			}
		});
}

function thirdCard() {
	console.log(organelles.front);
	inquirer.prompt([
		{
			name: "back",
			type: "list",
			message: "Display Answer?",
			choices: ["Yes"]
		},
		]).then((ans) => {
			if(ans.back === "Yes"){
				console.log(organelles.back);
				fourthCard();
			}
			else{
				console.log("Hmm?");
			}
		});
}

function fourthCard() {
	console.log(fourteeners.front);
	inquirer.prompt([
		{
			name: "back",
			type: "list",
			message: "Display Answer?",
			choices: ["Yes"]
		},
		]).then((ans) => {
			if(ans.back === "Yes"){
				console.log(fourteeners.back);
				playGame();
			}
			else{
				console.log("Hmm?");
			}
		});
}