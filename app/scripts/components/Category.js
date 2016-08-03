import React from 'react';
import $ from 'jquery';

import SingleQuestion from './SingleQuestion';

const Category = React.createClass({
  render: function() {
    let questions;
    if (this.props.clues) {
      questions = this.props.clues.map((question, i) => {
        return <SingleQuestion
          question={question.question}
          answer={question.answer}
          value={question.value}
          id={question.id}
          categoryId={question.category_id}
          key={i}/>
      });
    }
    return (
      <ul>
        <li>{this.props.title}</li>
        {questions}
      </ul>
    );
  }
})

export default Category;
