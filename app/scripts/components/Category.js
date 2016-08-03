import React from 'react';
import $ from 'jquery';

import SingleQuestion from './SingleQuestion';

const Category = React.createClass({
  render: function() {
    console.log(this.props);
    let questions = this.props.clues.map((question, i) => {
      return <SingleQuestion
        question={question.question}
        answer={question.answer}
        value={question.value}
        id={question.id}/>
    });
    return (
      <ul>
        <li>{this.props.title}</li>
        {questions}
      </ul>
    );
  }
})

export default Category;
