import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';

import Category from './Category';
import Scoreboard from './Scoreboard';
import Nav from './Nav';

const Game = React.createClass({
  getInitialState: function() {
    return {}
  },
  componentDidMount: function() {
    store.questionCollection.data.on('change update', () => {
      this.setState(store.questionCollection.data)
    });
    this.setState(this.state);
  },
  render: function() {
    let validCategories = [1,5,672,197,204,12226,800,17000,175,333,23,35,991,75,66,88,883,1035,10000,803,50,99,105,379,1113,19,41,89,93,100,32,7,16,1614,16144,13144,18144];
    return (
      <div id="gameboard-wrapper">
        <Nav/>
        <div id="gameboard">
          <Category categoryId='5'/>
          <Category categoryId='16'/>
          <Category categoryId='16144'/>
          <Category categoryId='175'/>
          <Category categoryId='991'/>
          <Category categoryId='803'/>
          {this.props.children}
          <Scoreboard />
        </div>
      </div>
    );
  }
})

export default Game;
