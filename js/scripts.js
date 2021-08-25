function player1(totalCount) {
  this.totalCount = totalCount;
  console.log(this.totalCount);
}

let totalCount = 0

function rollDice() {
  let score = 0;
  min = Math.ceil(1);
  max = Math.floor(6);
  score = Math.floor(Math.random() * max + min); //The maximum is exclusive and the minimum is inclusive
  return score;
}
function scoreCount() {
  tempScore = rollDice();
  console.log(tempScore);
  if (tempScore === 1) {
    totalCount = 0;
    return player1(totalCount);
  } else {
  totalCount += tempScore;
  return player1(totalCount);
  }
}



