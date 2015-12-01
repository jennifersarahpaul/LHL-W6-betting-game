//Single-player betting game

var bankroll = 20;

var round = function(userBet, userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    bankroll += userBet;
    alert("You guessed correctly! You win $" + userBet + ". Your running total is now $" + bankroll + ".");
  } else {
    if (userChoice + 1 === computerChoice || userChoice - 1 === computerChoice) {
      alert("You guessed incorrectly, but you were close. Your bankroll remains at $" + bankroll + ".");
    } else {
      bankroll -= userBet; 
      alert("You guessed incorrectly. You lose $" + userBet + ". Your running total is now $" + bankroll + ".");
    }
  }
};

var getNumber = function(text, min, max) {
  var value = prompt(text);
  if(value) {
    var number = parseInt(value, 10);
    if(min && number < min) {
      return false;
    }
    if(max && number > max) {
      return false;
    }
    return number;
  } else {
    return false;
  }
};

var game = function() {
  while (bankroll > 0) {
    var computerChoice = Math.floor((Math.random() * 10) + 1);
    if (bankroll <= 5) {
      var userBet = getNumber("You can bet your last $5.", 5, 5); 
    } else {
      var userBet = getNumber("How much money are you betting? Choose from $5 to $10 (value only).", 5, 10); 
    }
    var userChoice = getNumber("Guess a number between 1 and 10:", 1, 10);
    if (userBet && userChoice) {
      round(userBet, userChoice, computerChoice);
    } else {
      alert("You didn't input the right type of numbers.");
    }
  }
};

