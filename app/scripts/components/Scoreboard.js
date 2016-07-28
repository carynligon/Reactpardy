import React from 'react';

const Scoreboard = React.createClass({
  render: function() {
    return (
      <div className="scoreboard">
        <div id="question-results">
          <p id="answered-correctly"></p>
          <p id="answered-incorrectly"></p>
        </div>
        <div id="total-money">
          <h2></h2>
        </div>
      </div>
    );
  }
})
