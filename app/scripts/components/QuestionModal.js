import React from 'react';
import $ from 'jquery';

const QuestionModal = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    let categoryId = this.props.params.question.split('-')[0];
    $.ajax({
      type: 'GET',
      url: `http://jservice.io/api/category?id=${categoryId}`,
      success: (data) => {
        console.log(data.clues);
        this.setState(data)
      }
    });
  },
  render: function() {
    console.log(this.props);
    if (this.state.data !== []){
      let data = this.state.clues;
      console.log(data);
      let questionId = this.props.params.question.split('-')[1];
      // let question = data.filter((question) => {
      //   return question.id === questionId;
      // });
      // console.log(question);
    }
    return (
      <form className="question-form">
        <p className="question-text"></p>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
});

export default QuestionModal;
