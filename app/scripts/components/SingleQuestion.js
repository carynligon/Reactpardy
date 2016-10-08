import React from 'react';
import {hashHistory} from 'react-router';

import $ from 'jquery';

import store from '../store';
import currentQuestion from '../models/CurrentQuestion';

const SingleQuestion = React.createClass({
  selectQuestion: function(e) {
    console.dir(e.target.parentNode.classList);
    if (e.target.parentNode.classList.value.indexOf('disable') === -1) {
      currentQuestion.set({
        question: this.props.question,
        answer: this.props.answer,
        value: this.props.value,
        categoryId: this.props.categoryId
      });
      e.target.parentNode.classList.add('disable');
      hashHistory.push(`/${this.props.id}`);
      document.getElementById(`${this.props.id}`).firstChild.style.display = 'none';
    }
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
