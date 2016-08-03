import React from 'react';
import $ from 'jquery';
import _ from 'underscore';
import {hashHistory} from 'react-router';
import Sifter from 'sifter';

import store from '../store';

const QuestionModal = React.createClass({
  getInitialState: function() {
    return {
      data: {},
      result: null
    }
  },
  componentDidMount: function() {
    this.setState({data: store.categoriesCollection.get(this.props.params.id)});
  },
  validateAnswer: function(e) {
    e.preventDefault();
    let guess = document.getElementById('user-guess').value.toLowerCase();
    let answer = this.state.data.answer.toLowerCase();
    answer = answer.replace('<i>', '');
    answer = answer.replace('</i>', '');
    answer = answer.replace(',', '');
    answer = answer.replace('.', '');
    answer = answer.replace('the', '');
    answer = answer.replace('a', '');
    answer = answer.replace('&', 'and');
    answer = answer.trim();
    if (guess === answer) {
      this.setState({result: 'Correct'});
      store.score.correctQuestion(this.state.data.value);
    } else {
      this.setState({result: 'Incorrect'});
      store.score.incorrectQuestion(this.state.data.value);
    }
    store.questionCollection.data.remove(this.props.params.question);
    this.removeQuestion();
    document.querySelector('#modal-question').style.display = 'block';
    document.querySelector('#backto-game').style.display = 'block';
  },
  removeQuestion: function() {
    let form = document.querySelector('.question-form');
    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
  },
  goToGame: function() {
    store.categoriesCollection.remove(this.model);
    if (store.categoriesCollection.length === 0) {
      document.getElementById('results-page').style.display = 'block';
    }
    hashHistory.push('/');
  },
  render: function() {
    console.log(this.state);
    let question;
    let result;
    if (this.state.data.question) {
      question = this.state.data.question;
    }
    let styles = {
      display: 'none'
    };
    return (
      <div className="modal-container">
        <div id="modal-wrapper">
          <h3 id="modal-question" style={styles}>{this.state.result}, the correct answer is {this.state.data.answer}</h3>
          <button style={styles} id="backto-game" onClick={this.goToGame}>Continue</button>
        </div>
        <form className="question-form" onSubmit={this.validateAnswer}>
          <p className="question-text">{this.state.data.question}</p>
          <div className="user-answer">
            <input type="text" id="user-guess" placeholder="Answer" />
            <input type="submit" value="Submit" id="submit-user-guess"/>
          </div>
        </form>
      </div>
    );
  }
});

export default QuestionModal;
