//display playerPoints and computerPoints
let playerPoints = 0;
let computerPoints = 0;

//buttons
let rockBtn = document.getElementById("1");
let paperBtn = document.getElementById("2");
let scissorsBtn = document.getElementById("3");
rockBtn.disabled = false 
paperBtn.disabled = false;
scissorsBtn.disabled= false;

//display computer choice
let computerChoiceDisplay = document.createElement('p');
document.body.appendChild(computerChoiceDisplay);

//display player choice
let playerChoiceDisplay = document.createElement('p');
document.body.appendChild(playerChoiceDisplay);

//display battle results
let battleResult = document.createElement('p');
document.body.appendChild(battleResult);

let finalResults = document.createElement('p');
finalResults.style.fontWeight = 'bold';
document.body.appendChild(finalResults);

//array of choices for computer to select from
let choices = ['rock', 'paper', 'scissors']
function getComputerChoice(){
    return randomizeChoice = choices[Math.floor(Math.random()*choices.length)]  
}


const btns = document.querySelectorAll('button');

btns.forEach((button) => { 
    button.addEventListener('click', () => {
    playerSelection= button.className;
    playerChoiceDisplay.textContent = "You chose "+ playerSelection;
    computerSelection = getComputerChoice();
    computerChoiceDisplay.textContent = "Computer chose " + computerSelection;
    playRound(playerSelection, computerSelection)
    checkForwinner(playerPoints, computerPoints);
    });
});




function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        battleResult.textContent = 'It\'s a tie game. No points awarded';
    } else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection== 'paper' && computerSelection == 'rock') ||
        (playerSelection== 'scissors' && computerSelection == 'paper'))
        {
        
        ++playerPoints
        battleResult.textContent = 'Player won '
      
        } else {
        ++computerPoints
        battleResult.textContent =  'Computer won '
        };
     
    let playerPointsOutput = document.getElementById('player-points');
    playerPointsOutput.textContent = 'Your score: ' + playerPoints;
    let computerPointsOutput = document.getElementById('computer-points');
    computerPointsOutput.textContent = 'Computer score: '+ computerPoints;
        
}

//check for winner
function checkForwinner(playerPoints, computerPoints){

    if(playerPoints === 5){
        // btns.disabled = true;
        finalResults.textContent = 'Great job! You beat the computer!'
        rockBtn.disabled = true; 
        paperBtn.disabled = true;
        scissorsBtn.disabled= true;
    } else if (computerPoints ===5){
        // btns.disabled = true;
        finalResults.textContent = 'BOO HOO! You LOST against the computer. Better luck next time!'
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled= true;
    } 

  

}

//quite game
let quitGameBtn = document.createElement('button');
quitGameBtn.textContent = 'Quit Game';
document.body.appendChild(quitGameBtn);
quitGameBtn.addEventListener('click', () => {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled= true;
});



//resets game
let resetBtn = document.createElement('button')
resetBtn.textContent = 'Play Again'
document.body.appendChild(resetBtn)
resetBtn.addEventListener('click', () => {
    document.location.reload()}
);




