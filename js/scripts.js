function Player(name, score, turnScore) {
  this.name = name;
  this.score = score;
  this.turnScore = turnScore;
}

Player.prototype.rollDice = function () {
  tempScore = Math.floor(Math.random() * 6 + 1);
  console.log("Roll score: " + tempScore);
  if (tempScore === 1) {
    this.turnScore = 0;
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


player1 = new Player("player1", 0, 0);
player2 = new Player("player2", 0, 0);
// var tempScore = 0;
var turnCounter = 1;


// function updateDisables(player) {
//   if (player.id == 1) {
//       $("#playerTwoHold").prop("disabled", false);
//       $("#playerOneHold").prop("disabled", true);
//       $("#playerTwoRoll").prop("disabled", false);
//       $("#playerOneRoll").prop("disabled", true);
//   } else if (player.id == 2) {
//       $("#playerTwoHold").prop("disabled", true);
//       $("#playerOneHold").prop("disabled", false);
//       $("#playerTwoRoll").prop("disabled", true);
//       $("#playerOneRoll").prop("disabled", false);
//   }
// }

// function()

// var x = tempScore;

// if (x = 1) {
//           d.innerHTML = '<img src=https://image.ibb.co/cQKOhc/dice1.png>';
//   }

$(document).ready(function () {
  $("#playerRoll").click(function () {
    console.log("Turn counter: " + turnCounter);
    if (turnCounter === 1) {
      
      player1.rollDice();
    } else if (turnCounter === 2) {
      
      player2.rollDice();
    }
    $("#player1Score").html(player1.score);
    $("#player1TurnScore").html(player1.turnScore);
    $("#player2Score").html(player2.score);
    $("#player2TurnScore").html(player2.turnScore);
  });

  $("#playerHold").click(function () {
    console.log("Turn counter: " + turnCounter);
    if (turnCounter === 1){
    player1.hold();
    $("#player1TurnScore").html(0);
    if (player1.score >= 20) {
      $("#playerHold,#playerRoll").hide();
      $("#player1Win").show();
    }
    console.log("P1 Score: " + player1.score);
    } else if (turnCounter === 2) {
    player2.hold();
    $("#player2TurnScore").html(0);
      if (player2.score >= 20) {
        $("#playerHold,#playerRoll").hide();
        $("#player2Win").show();
      }
      console.log("P2 Score: " + player2.score);
    }
    $("#player1Score").html(player1.score);
    $("#player2Score").html(player2.score);
    $(".btn-warning").click(function () {
      location.reload();
    });
  });
});

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



