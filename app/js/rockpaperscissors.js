////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move != null) {
      returnVar = move;
    } else {
      returnVar='getInput()';
    };
    return returnVar;
  }

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move != null) {
      returnVar = move;
    } else {
      returnVar='randomPlay()';
    };
    return returnVar;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if playerMove = "rock" {
      switch (computerMove)
      {
        case 'rock':
          winner = "tie";
          break;
        case 'paper':
          winner = 'computer';
          break;
        default: winner = 'user';
      }
    }
    if playerMove = "paper" {
      switch (computerMove)
      {
        case 'paper':
          winner = "tie";
          break;
        case 'scissors':
          winner = 'computer';
          break;
        default: winner = 'user';
      }
    }
    if playerMove = "scissors" {
      switch (computerMove)
      {
        case 'scissors':
          winner = "tie";
          break;
        case 'rock':
          winner = 'computer';
          break;
        default: winner = 'user';
      }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
      console.log("  ");
      console.log("Starting New Game");
      var man = randomPlay();
      console.log("User Selects: " + man);
      var machine = getPlayerMove();
      console.log("Computer Selects: " + machine);
      var winner = getWinner(man,machine);
      if winner === "user" {
        playerWins + 1;
        console.log("User Wins"):
      }
      else {
        if winner === "computer" {
          computerWins + 1;
          console.log("Computer Wins");
        }
        else {
          console.log("Tie - No One Wins");
        }
      console.log("User: " + playerWins + "Computer: "  + computerWins);
      }
  }
return [playerWins, computerWins];
}
*/
