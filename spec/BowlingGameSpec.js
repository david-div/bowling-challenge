describe('BowlingGame', function(){

  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  describe('When initialized', function(){

    it('should start with an emtpy rolls array', function(){
      expect(bowlingGame.rolls).toEqual(new Array);
    });
  });

  // Criteria:
  // Gutter game

  describe('when bowling', function(){

    it('can roll a gutter game', function(){
      rollMany(0, 20)
      expect(bowlingGame.score()).toEqual(0)

    });

    it('can roll a spare', function(){
      bowlingGame.roll(5);
      bowlingGame.roll(5);
      bowlingGame.roll(3);
      rollMany(0, 17)
      expect(bowlingGame.score()).toEqual(16)
    });

    it('can roll a strike', function(){
      bowlingGame.roll(10);
      bowlingGame.roll(4);
      bowlingGame.roll(3);
      rollMany(0, 16)
      expect(bowlingGame.score()).toEqual(24)
    });

    it('can roll a prefert game', function(){
      rollMany(10,12);
      expect(bowlingGame.score()).toEqual(300)

    })

    var rollMany = function (pins, rolls) {
      for (var i = 0; i < rolls; i++ ) (
        bowlingGame.roll(pins)
      )
    };


  });

  // One frame
  // Multiple frames
  // Spares
  // Strikes
  // Final Frame

});
