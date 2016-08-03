import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';

import Category from './Category';
import Scoreboard from './Scoreboard';
import Nav from './Nav';

const Game = React.createClass({
  getInitialState: function() {
    store.categoriesCollection.newGame();
    return {category: store.categoriesCollection.toJSON()};
  },
  componentDidMount: function() {
    store.categoriesCollection.on('change update', () => {
      this.setState(store.categoriesCollection.toJSON());
    });
    this.setState(this.state);
  },
  render: function() {
    let categories = this.state.category.map((category, i) => {
      return <ul key={i} id={category.title}></ul>;
    });
    console.log(this.state);
    // let validCategories = [1,5,672,197,204,12226,800,17000,175,333,23,35,991,75,66,88,883,1035,10000,803,50,99,105,379,1113,19,41,89,93,100,32,7,16,1614,16144,13144,18144];
    return (
      <div id="gameboard-wrapper">
        <Nav/>
        <div id="gameboard">
          {categories}
          {this.props.children}
          <Scoreboard />
        </div>
      </div>
    );
  }
})

export default Game;
