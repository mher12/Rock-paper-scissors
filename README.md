# Rock-paper-scissors
Create a game that can be played from the browser console

create a blank html document with script tag linking to external javascript
game to be played on console against computer

write function called getComputerChoice
-function to return either 'Rock', 'Paper', or 'Scissors'.
-console log to ensure console is returning the expected output before moving to next step

write a function that plays a single round of Rock Paper Scissors
-function should take two parameters
    -playerSelection
    -computerSelection
-function should return a string that declares the winner of the round: 'You lose! Paper beats Rock'
-make your function's playerSelection parameter case-insensitive (so users can input 'rock', 'ROCK', 'Rock' or any other variation)
-Return result of this function call, NOT console.log()

write a new function called game()
-use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end
-you may use a for loop or just call  your playRound function 5 times in a row
-be sure to console.log() to display the results of each round and the winner at the end
-use prompt() to get input from the user
-you may want to change return value to something more useful
-feel free to create more 'helper' functions if you think it would be useful
