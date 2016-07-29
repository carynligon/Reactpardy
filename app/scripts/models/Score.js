import Backbone from 'backbone';

const Score = Backbone.Model.extend({
  defaults: {
    correct: 0,
    incorrect: 0,
    money: 0
  },
  correctQuestion: function(value) {
    this.set({
      correct: Number(this.get('correct')) + 1,
      money: Number(this.get('money')) + Number(value)
    });
  },
  incorrectQuestion: function() {
    this.set({
      incorrect: this.get('incorrect') + 1
    });
  }
});

export default Score;
