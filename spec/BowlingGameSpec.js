describe('BowlingGame', function(){

  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  describe('When initialized', function(){

    it('should start with an empty score card', function(){
        expect(bowlingGame.allFrameScores).toEqual(new Array);
    });

  });


  describe('#cummulativeScores', function(){

    it('scores sould be cummulative', function(){
        bowlingGame.frameOne([5,4])
        bowlingGame.frameTwo([3,2])
        bowlingGame.frameThree([6])
        expect(bowlingGame.cummulativeScores()[2]).toEqual(20)
    });

  });

  describe('#frameOne', function(){

    it('should add the score to the score card', function(){
      bowlingGame.frameOne([5,4])
      expect(bowlingGame.allFrameScores[0]).toEqual(9)
    });

  });

  describe('#frameTwo', function(){

    it('should add the score to the score card', function(){
      bowlingGame.frameOne([5,4])
      bowlingGame.frameTwo([3,2])
      expect(bowlingGame.allFrameScores[1]).toEqual(5)
    });

  });

  describe('#frameThress', function(){

    it('should add the score to the score card', function(){
      bowlingGame.frameOne([5,4])
      bowlingGame.frameTwo([3,2])
      bowlingGame.frameThree([6])
      expect(bowlingGame.allFrameScores[2]).toEqual(6)
    });

  });

});
