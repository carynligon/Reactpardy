import React from 'react';
import $ from 'jquery';

import store from '../store';

const QuestionModal = React.createClass({
  render: function() {
    console.log(store);
      let questionId = this.props.params.question;
      let question = store.filter((question) => {
        return question.id === Number(questionId);
      });
      console.log(question[0].question);
    return (
      <form className="question-form">
        <p className="question-text">{question[0].question}</p>
        <input type="text" id="user-guess" placeholder="Answer" />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
});

export default QuestionModal;
