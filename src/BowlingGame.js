var BowlingGame = function(){
  this.allFrameScores = []
};

BowlingGame.prototype.cummulativeScores = function () {
  var cummulative = []
  this.allFrameScores.reduce(function(a, b, i) { return cummulative[i] = a + b; }, 0);
  return cummulative
};

// second is == 0, if there is a strike, only first is entered

BowlingGame.prototype.frameOne = function ([first, second = 0]) {
  this.allFrameScores.push(first + second)
  return first + second
};

BowlingGame.prototype.frameTwo = function ([first, second = 0]) {
  this.allFrameScores.push(first + second)
  return first + second
};

BowlingGame.prototype.frameThree = function ([first, second = 0]) {
  this.allFrameScores.push(first + second)
  return first + second

};
