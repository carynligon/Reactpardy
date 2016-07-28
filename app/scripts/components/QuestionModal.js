import React from 'react';
import $ from 'jquery';
import _ from 'underscore';
import {hashHistory} from 'react-router';

import store from '../store';

const QuestionModal = React.createClass({
  getInitialState: function() {
    return {
      data: {}
    }
  },
  componentDidMount: function() {
    let id = this.props.params.question;
    console.log(store.questionCollection.data);
    store.questionCollection.data.on('update change', () => {
      this.setState({data: store.questionCollection.data.get(id).toJSON()});
    });
  },
  validateAnswer: function(e) {
    e.preventDefault();
    let guess = document.getElementById('user-guess').value;
    let answer = this.state.data.answer;
    if (guess === answer) {
      console.log('correct');
    } else {
      console.log('incorrect ' + answer + ' is the right answer');
    }
    this.removeQuestion();
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
    console.log(this.state.data.question);
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
        <h3>{result}</h3>
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