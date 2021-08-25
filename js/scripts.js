function Player(name, score, turnScore, isTurn) {
  this.name = name;
  this.score = score;
  this.turnScore = turnScore;
  this.isTurn = isTurn;
}

// function player1(totalCount, turnCount) {
//   this.totalCount = totalCount;
//   console.log(this.totalCount);
//   this.turnCount = turnCount;
// }

player1 = new Player("player1", 0, 0, true);
player2 = new Player("player2", 0, 0, false);

let totalCount = 0

// function rollDice() {
//   let score = 0;
//   min = Math.ceil(1);
//   max = Math.floor(6);
//   score = Math.floor(Math.random() * max + min);
//   return score;
// }

Player.prototype.rollDice = function() {
  tempScore = Math.floor(Math.random() * 6 + 1);
  console.log(tempScore);
  if (tempScore === 1) {
    // this.isTurn = false;
    this.turnScore += 0;
  } else {
    this.turnScore += tempScore;
  }
}

Player.prototype.hold = function() {
  this.score += thisturnScore;
  this.turnScore = 0;
  this.isTurn = false;
}


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



