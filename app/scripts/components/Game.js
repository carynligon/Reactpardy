import React from 'react';

import Category from './Category';
import Scoreboard from './Scoreboard';

const Game = React.createClass({
  render: function() {
    let validCategories = [1,4,5,21,780,25,672,197,204,12226,991,800,803,75,66,50,32];
    // categoryId=validCategories[Math.floor(Math.random() * validCategories.length)]
    return (
      <div id="gameboard">
        <Category categoryId='1'/>
        <Category categoryId='4'/>
        <Category categoryId='5'/>
        <Category categoryId='21'/>
        <Category categoryId='780'/>
        <Category categoryId='25'/>
        {this.props.children}
        <Scoreboard />
      </div>
    );
  }
})

export default Game;
