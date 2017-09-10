var BowlingGame = function(){
  this.rolls = [];

};

BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function () {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStike()) {
      result += getStrikeScore();
      rollIndex += 1;
    } else if (isSpare()) {
      result += getSpareScore();
      rollIndex += 2;
    } else {
      result += getNormalScore();
      rollIndex += 2;
    }

  };
  return result;

  function isStike() {
    return game.rolls[rollIndex] == 10;
  };

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10
  }

  // gets one for the frame and two for the bonus
  function getStrikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2]
  }

  // gets two for the frame and one for the bonus
  function getSpareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2]
  }

  function getNormalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];

  }
};

BowlingGame.prototype.cummulativeScores = function () {
  var cummulative = []
  this.allFrameScores.reduce(function(a, b, i) { return cummulative[i] = a + b; }, 0);
  return cummulative
};
