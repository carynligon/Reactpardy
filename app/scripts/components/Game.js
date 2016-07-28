import React from 'react';

import Category from './Category';

const Game = React.createClass({
  render: function() {
    let validCategories = [1,4,5,21,780,25,672,197,204,12226,991,800,803,75,66,50,32];
    return (
      <div id="gameboard">
        <Category categoryId={validCategories[Math.floor(Math.random() * validCategories.length)]}/>
        <Category categoryId={validCategories[Math.floor(Math.random() * validCategories.length)]}/>
        <Category categoryId={validCategories[Math.floor(Math.random() * validCategories.length)]}/>
        <Category categoryId={validCategories[Math.floor(Math.random() * validCategories.length)]}/>
        <Category categoryId={validCategories[Math.floor(Math.random() * validCategories.length)]}/>
        <Category categoryId={validCategories[Math.floor(Math.random() * validCategories.length)]}/>
        {this.props.children}
      </div>
    );
  }
})

export default Game;
