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
    let id = this.props.params.question;
    console.log(store.questionCollection.data.length);
    if (store.questionCollection.data.get(id)) {
      this.setState({data: store.questionCollection.data.get(id).toJSON()});
    }
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
    store.questionCollection.data.remove(this.model);
    if (store.questionCollection.data.length === 0) {
      document.getElementById('results-page').style.display = 'block';
    }
    hashHistory.push('/');
  },
  render: function() {
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
