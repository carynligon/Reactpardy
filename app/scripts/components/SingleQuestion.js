import React from 'react';
import {hashHistory} from 'react-router';

import $ from 'jquery';

import store from '../store';

const SingleQuestion = React.createClass({
  selectQuestion: function(e) {
    let category = store.categoriesCollection.get(this.props.categoryId);
    let question = category.get('clues').filter((clue) => {
      return clue.id === this.props.id;
    });
    console.log(question[0].question);
    // hashHistory.push(`/${this.props.id}`);
    // document.getElementById(`${this.props.id}`).style.display = 'none';
  },
  render: function() {
    return(
      <li id={this.props.id} onClick={this.selectQuestion}>
        <h2>${this.props.value}</h2>
      </li>
    );
  }
});

export default SingleQuestion;
