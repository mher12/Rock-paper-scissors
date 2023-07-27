
function getComputerChoice(){
    let randomize = Math.floor((Math.random()*3)+1)
    if (randomize == 1){
        return 'rock';
    } else if (randomize == 2) {
        return 'paper';
    } else if(randomize == 3) {
      return 'scissors';
    }
 
};

// getComputerChoice();

function playRound(playerSelection, computerSelection){
    let result = '';
    if (playerSelection === computerSelection){
        result = 'tie game'
    } else if(
        (playerSelection== 'rock' && computerSelection == 'scissors') ||
        (playerSelection== 'paper' && computerSelection == 'rock') ||
        (playerSelection== 'scissors' && computerSelection == 'paper'))
        {
            result =  `You won. ${playerSelection} beats ${computerSelection}.`
        } else  {
            result = `You lost. ${computerSelection} beats ${playerSelection}.`
        };
        return result
};

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log((playRound(playerSelection, computerSelection)));

function game(){
    for(let i = 1; 1 <= 5; i ++){
        playRound()
    };
   
};

console.log(game());
