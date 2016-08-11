import React from 'react';
import {hashHistory} from 'react-router';

import $ from 'jquery';

import store from '../store';
import currentQuestion from '../models/CurrentQuestion';

const SingleQuestion = React.createClass({
  selectQuestion: function(e) {
    // let category = store.categoriesCollection.get(this.props.categoryId);
    // let question = category.get('clues').filter((clue) => {
    //   return clue.id === this.props.id;
    // });
    currentQuestion.set({
      question: this.props.question,
      answer: this.props.answer,
      value: this.props.value,
      categoryId: this.props.categoryId
    });
    hashHistory.push(`/${this.props.id}`);
    document.getElementById(`${this.props.id}`).firstChild.style.display = 'none';
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
