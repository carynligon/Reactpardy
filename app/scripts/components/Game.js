import React from 'react';

import Category from './Category';
import Scoreboard from './Scoreboard';
import Nav from './Nav';

const Game = React.createClass({
  render: function() {
    let validCategories = [1,4,5,672,197,204,12226,991,800,803,75,66,50,32];
    // categoryId=validCategories[Math.floor(Math.random() * validCategories.length)]
    return (
      <div id="gameboard-wrapper">
        <Nav/>
        <div id="gameboard">
          <Category categoryId='1'/>
          <Category categoryId='4'/>
          <Category categoryId='5'/>
          <Category categoryId='75'/>
          <Category categoryId='672'/>
          <Category categoryId='800'/>
          {this.props.children}
          <Scoreboard />
        </div>
      </div>
    );
  }
})

export default Game;
