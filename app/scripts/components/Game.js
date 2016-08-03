import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';

import Category from './Category';
import Scoreboard from './Scoreboard';
import Nav from './Nav';

const Game = React.createClass({
  getInitialState: function() {
    return {categories: store.categoriesCollection.toJSON()};
  },
  componentDidMount: function() {
    store.categoriesCollection.on('change update', () => {
      this.setState({categories: store.categoriesCollection.toJSON()});
    });
    store.categoriesCollection.newGame();
  },
  render: function() {
    let categories = this.state.categories.map((category, i) => {
      return <Category
        key={i}
        clues={category.clues}
        title={category.title}/>;
    });
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
