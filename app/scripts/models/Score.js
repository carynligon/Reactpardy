import Backbone from 'backbone';

const Score = Backbone.Model.extend({
  correct: 0,
  incorrect: 0,
  money: 0
});

export default Score;
