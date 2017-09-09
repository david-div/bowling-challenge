describe('ScoreCard', function(){

  var scoreCard;

  beforeEach(function(){
    scoreCard = new scoreCard();
  });

  describe('When initialized', function(){

    it('should start with an empty score card', function(){
        expect(scoreCard.score).toEqual([]);
    })

  });

});
