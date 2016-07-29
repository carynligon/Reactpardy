import React from 'react';
import {hashHistory} from 'react-router';


const Home = React.createClass({
  toGameBoard: function() {
    hashHistory.push('/game');
  },
  render: function() {
    return (
      <form id="start-game">
        <input type="submit" id="begin-btn" value="Start New Game" onClick={this.toGameBoard}/>
      </form>
    );
  }
});

export default Home;
