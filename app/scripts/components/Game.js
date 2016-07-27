import React from 'react';

import Category from './Category';

const Game = React.createClass({
  render: function() {
    return (
      <div id="gameboard">
        <Category categoryId={Math.floor(Math.random() * 18410)}/>
        <Category categoryId={Math.floor(Math.random() * 18410)}/>
        <Category categoryId={Math.floor(Math.random() * 18410)}/>
        <Category categoryId={Math.floor(Math.random() * 18410)}/>
        <Category categoryId={Math.floor(Math.random() * 18410)}/>
        <Category categoryId={Math.floor(Math.random() * 18410)}/>
        {this.props.children}
      </div>
    );
  }
})

export default Game;
