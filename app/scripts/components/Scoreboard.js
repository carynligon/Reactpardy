import React from 'react';

import store from '../store';

const Scoreboard = React.createClass({
  getInitialState: function() {
    return store.score.toJSON();
  },
  componentDidMount: function() {
    store.score.on('change', () => {
      this.setState(store.score.toJSON());
      console.log('changed');
      console.log(this.state);
    });
    store.score.get('correct');
  },
  render: function() {
    console.log(this.state);
    return (
      <div className="scoreboard">
        <div id="question-results">
          <p id="answered-correctly">Correct:{this.state.correct}</p>
          <p id="answered-incorrectly">Incorrect: {this.state.incorrect}</p>
        </div>
        <div id="total-money">
          <h2>${this.state.money}</h2>
        </div>
      </div>
    );
  }
})

export default Scoreboard;
