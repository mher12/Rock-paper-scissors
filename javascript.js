// Create a FUNCTION named getComputerChoice.
// This FUNCTION will return either 'rock', 'paper', or 'scissors' at random when called

//define computer choice(s)
//Math.random()--> returns a floating-point between 0 to 1- decimal number
//Math.floor()--> rounds the number down to the nearest integer
//added +1 to have integers start at 1 rather than 0
//randomizeChoice returns integer of 1, 2, or 3
//if the randomeizeChoice returns an integer of 1 then the function is to return string of 'Rock' as defined in variables 
//if the randomeizeChoice returns an integer of 2 then the function is to return string of 'Paper' as defined in variables 
//if the randomeizeChoice returns an integer of 3 then the function is to return string of 'Scissors' as defined in variables 


let computerChoseRock = 'rock';
let computerChosePaper = 'paper';
let computerChoseScissors = 'scissors';

function getComputerChoice (){
        randomizeChoice = Math.floor(Math.random()*3)+ 1;
        if (randomizeChoice === 1){
            return computerChoseRock;}
        if (randomizeChoice === 2) {
            return computerChosePaper;}
        if (randomizeChoice === 3) {
            return computerChoseScissors;
        }
    };


// Write a function that plays a single round of Rock Paper Scissors
// Function should take two parameters (playerSelection, computerSelection)
// Function is to return a string that declares the winner of the round
// playerSelection parameter should be case-insensitive
// Function should RETURN the results of the function call
//
//define player choice(s)
//to play a round of game, player must provide a player selection, system will generate at random computer's selection
//evaluate the player's selection to computer's selection
//if player selection and computer selection are the same, return a statement of it's a tie game!
//if player selection and computer selection are not same then run the codes below until condition has been met
//once condition has been met, return results


let playerSelectRock = 'rock';
let playerSelectPaper = 'paper';
let playerSelectScissor = 'scissors';
let computerSelection = getComputerChoice();

let playerSelection = prompt('Enter a selection of \'Rock\', \'Paper\', or \'Scissors\':', '').toLocaleLowerCase();

function playRound (playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return 'Tie game!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'You won! Rock beats scissors!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'You lost! Paper beats rocks!'
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'You lost! Scissors beats paper!'
    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return 'You won! Paper beats rock!' 
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'You won! Scissors beats paper!'
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'You lost! Rock beats scissors!'
};
};

console.log(playRound(playerSelection, computerSelection));


