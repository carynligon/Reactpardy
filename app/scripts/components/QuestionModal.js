import React from 'react';
import $ from 'jquery';
import _ from 'underscore';
import {hashHistory} from 'react-router';

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
    console.log(store.questionCollection.data);
    this.setState({data: store.questionCollection.data.get(id).toJSON()});
  },
  validateAnswer: function(e) {
    e.preventDefault();
    let guess = document.getElementById('user-guess').value;
    let answer = this.state.data.answer;
    if (guess === answer) {
      console.log('correct');
      this.setState({result: 'correct'});
      store.score.set({
        correct: store.score.correct + 1,
        money: store.score.money + this.state.data.value
      });
    } else {
      console.log('incorrect ' + answer + ' is the right answer');
      this.setState({result: 'incorrect'});
      store.score.set({
        incorrect: store.score.incorrect + 1,
      });
    }
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
    hashHistory.push('/game');
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
        <h3 id="modal-question" style={styles}>{this.state.result}, the correct answer is {this.state.data.answer}</h3>
        <button style={styles} id="backto-game" onClick={this.goToGame}>Continue</button>
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
