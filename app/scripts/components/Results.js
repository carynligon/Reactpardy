import React from 'react';

import store from '../store';

const Results = React.createClass({
  render: function() {
    let message;
    if (store.score.correct > 25) {
      message = `You're a Champion!`
    } else if (store.score.correct > 18 && store.score.correct < 25) {
      message = `Good job!`
    } else if (store.score.correct > 12 && store.score.correct < 18) {
      message = `Maybe you'll do better next time`
    } else if (store.score.correct < 12) {
      message = `Please stop...`
    }
    console.log();
    return (
      <div id="results">
        <p id="message">{message}</p>
        <p id="total-earnings">${store.score.money}</p>
        <button id="play-again">Play Again!</button>
      </div>
    );
  }
});

export default Results;
