import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';
import Results from './Results';

const Scoreboard = React.createClass({
  getInitialState: function() {
    return store.score.toJSON();
  },
  changeScore: function() {
    this.setState(store.score.toJSON());
    console.log('changed');
  },
  componentDidMount: function() {
    store.score.on('change', this.changeScore);
    store.score.get('correct');
  },
  componentWillUnmount() {
    store.score.off('change', this.changeScore);
  },
  render: function() {
    console.log(this.state);
    if (this.state.correct + this.state.incorrect === 4) {
      console.log('4');
    }
    let sign;
    let styles;
    if (this.state.money < 0) {
      styles = {
        color: '#d81d1d'
      };
      sign = '-$';
    } else {
      styles = {
        color: '#1eb51e'
      };
      sign = '$'
    }
    return (
      <div className="results-wrapper">
        <div className="scoreboard">
          <div id="total-money">
            <h2 style={styles}>{sign}{Math.abs(this.state.money)}</h2>
          </div>
          <div id="question-results">
            <p id="answered-correctly">{this.state.correct} / {Number(this.state.incorrect) + Number(this.state.correct)} Correct</p>
          </div>
        </div>
        <Results/>
      </div>
    );
  }
})

export default Scoreboard;
