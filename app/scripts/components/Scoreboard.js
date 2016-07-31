import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';
import Results from './Results';

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
    let sign;
    if (this.state.money < 0) {
      sign = '-$';
    } else {
      sign = '$'
    }
    return (
      <div className="results-wrapper">
        <div className="scoreboard">
          <div id="question-results">
            <p id="answered-correctly">Correct:{this.state.correct}</p>
            <p id="answered-incorrectly">Incorrect: {this.state.incorrect}</p>
          </div>
          <div id="total-money">
            <h2>{sign}{Math.abs(this.state.money)}</h2>
          </div>
        </div>
        <Results/>
      </div>
    );
  }
})

export default Scoreboard;
