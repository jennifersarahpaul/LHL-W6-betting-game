//Single-player betting game

$(document).ready(function() {

  $("#betButton").click(function() {
    game();
    $("#balance").text("$" + bankroll);
  });

  var bankroll = 100;

  var game = function() {
    var message = '';
    var computerChoice = Math.floor((Math.random() * 10) + 1);
    console.log(computerChoice);
    var userBet = $("#betAmount").val();
    var userChoice = $("#number").val();
    if (canGame(userChoice, userBet)) {
      message = round(userBet, userChoice, computerChoice);
    } else {
      message = "You didn't input the right criteria.";
    }
    $("#message").text(message);
  };

  var canGame = function(userChoice, userBet) {
    return (
      userChoice && 
      userBet && 
      userChoice >= 1 && 
      userChoice <= 10 && 
      userBet >= 5 && 
      userBet <= 10
    );
  };

  var round = function(userBet, userChoice, computerChoice) {
    userBet = parseInt(userBet);
    var message = "";
    if (userChoice == computerChoice) {
      bankroll += userBet;
      message = "You guessed correctly! You win $" + userBet + ".";
    } else if (Math.abs(userChoice - computerChoice) <= 1) { 
        message = "You guessed incorrectly, but you were close. Your bankroll remains the same.";   
    } else {
      bankroll -= userBet; 
      message = "You guessed incorrectly. You lose $" + userBet + ".";
    }
    return message;
  };
});

/* TODO:
  - add behaviour for when bankroll <= 5 (fadeOut()?)
  - make a restart button
  - show player's balance in a cool way 
  - overall formatting */
