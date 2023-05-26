// Create a FUNCTION named getComputerChoice.
// This FUNCTION will return either 'rock', 'paper', or 'scissors' at random when called

//Math.random()--> returns a floating-point between 0 to 1- decimal number
//Math.floor()--> rounds the number down to the nearest integer
//added +1 to have integers start at 1 rather than 0
//randomizeChoice returns integer of 1, 2, or 3
//if the randomeizeChoice returns an integer of 1 then the function is to return string of 'Rock' 
//if the randomeizeChoice returns an integer of 2 then the function is to return string of 'Paper' 
//if the randomeizeChoice returns an integer of 3 then the function is to return string of 'Scissors' 


function getComputerChoice (){
    randomizeChoice = Math.floor(Math.random()*3)+ 1;
    if (randomizeChoice === 1){
        return 'Rock';}
    if (randomizeChoice === 2) {
        return 'Paper';}
    if (randomizeChoice === 3) {
        return 'Scissors';
    }
};

console.log (getComputerChoice());