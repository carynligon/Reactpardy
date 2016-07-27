import React from 'react';
import $ from 'jquery';

import SingleQuestion from './SingleQuestion';

const Category = React.createClass({
  getInitialState: function() {
    return {
      id: null,
      title: '',
      clues_count: null
    }
  },
  componentDidMount: function() {
    $.ajax({
      type: 'GET',
      url: `http://jservice.io/api/category?id=${this.props.categoryId}`,
      success: (data) => {
        this.setState(data);
      }
    });
  },
  render: function() {
    let question1;
    let question2;
    let question3;
    let question4;
    let question5;
    if (this.state.id) {
      question1 = <SingleQuestion categoryId={this.props.categoryId} value='200'/>
      question2 = <SingleQuestion categoryId={this.props.categoryId} value='400'/>
      question3 = <SingleQuestion categoryId={this.props.categoryId} value='600'/>
      question4 = <SingleQuestion categoryId={this.props.categoryId} value='800'/>
      question5 = <SingleQuestion categoryId={this.props.categoryId} value='1000'/>;
    }
    return (
      <ul id={this.state.id}>
        <li>{this.state.title}</li>
        {question1}
        {question2}
        {question3}
        {question4}
        {question5}
      </ul>
    );
  }
})

export default Category;
