function Player(name, score, turnScore, isTurn) {
  this.name = name;
  this.score = score;
  this.turnScore = turnScore;
  this.isTurn = isTurn;
}

Player.prototype.rollDice = function () {
  tempScore = Math.floor(Math.random() * 6 + 1);
  console.log("Roll score: " + tempScore);
  if (tempScore === 1) {
    this.turnScore += 0;
    if (turnCounter === 1) {
      turnCounter = 2;
    } else if (turnCounter === 2) {
      turnCounter = 1;
    }
  } else {
    this.turnScore += tempScore;
  }
}

Player.prototype.hold = function () {
  this.score += this.turnScore;
  this.turnScore = 0;
  if (turnCounter === 1) {
    turnCounter = 2;
  } else if (turnCounter === 2) {
    turnCounter = 1;
  }
}


player1 = new Player("player1", 0, 0, 1);
player2 = new Player("player2", 0, 0, 2);
var turnCounter = 1;

// $("button#playerOneHold").click(function) {
//     const result = playerOne.roll();
//     updatePlayerOneTurnTotal(playerOne, result);
// })
// $("playerOneHold").click(function() {
//     playerOne.hold();
//     updatePlayerOneOverallTotal(playerOne);
//     updateDisable(playerOne);
// })

// function updatePlayerOneTurnTotal(player, roll) {
//     $("#playerOneturnTotal").Text(player.turnPointTotal);
//     $("playerOneCurrentRoll").text(roll);
// }
// function updatePlayerOneOverallTotal(player) {
//     $$("playerOneOverallTotal").text(player.pointTotal);
// }


$(document).ready(function () {
  $("#playerRoll").click(function () {
    console.log("Turn counter: " + turnCounter);
    if (turnCounter === 1) {
      player1.rollDice();
    } else if (turnCounter === 2) {
      player2.rollDice();
    }
    $("#player1Score").html(player1.score);
    $("#player2Score").html(player2.score);
  });

  $("#playerHold").click(function () {
    console.log("Turn counter: " + turnCounter);
    if (turnCounter === 1){
    player1.hold();
    console.log("P1 Score: " + player1.score);
    } else if (turnCounter === 2) {
    player2.hold();
    console.log("P2 Score: " + player2.score);
    }
    $("#player1Score").html(player1.score);
    $("#player2Score").html(player2.score);
  });
});





// while player's turn = true
//   two buttons: rollDice, hold
//   on click for rollDice
//     rollDice
//     if rollDice === 1 && player1
//       set player2.isturn to true
//     else if rollDice === 1 && player2
//       set player1.isturn to true

//   on click for hold
//     if player1, set player2.isTurn to true
//     if player2, set player1.isTurn to true

// while turncounter = 1
//   two buttons: rollDice, hold
//   on click for rollDice
//     rollDice
//     if rollDice === 1, turncounter = 2
// while turncounter = 2
//   two buttons: rollDice, hold
//   on click for rollDice
//     rollDice
//     if rollDice === 1, turncounter = 1


// Player.prototype.hold = function() {
//   this.pointTotal += this.turnPointTotal;
//   this.turnPointTotal = 0;
//   this.isTurn = false;

// playerOne = new Player(name,1,true);

// function scoreCount() {
//   tempScore = rollDice();
//   console.log(tempScore);
//   if (tempScore === 1) {
//     totalCount = 0;
//     return player1(totalCount);
//   } else {
//   totalCount += tempScore;
//   return player1(totalCount);
//   }
// }




// function scoreCount() {
//   tempScore = rollDice();
//   console.log(tempScore);
//   if (tempScore === 1) {
//     totalCount = 0;
//     return player1(totalCount);
//   } else {
//   totalCount += tempScore;
//   return player1(totalCount);
//   }
// }



