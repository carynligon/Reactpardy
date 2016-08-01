import React from 'react';
import {hashHistory} from 'react-router';

import $ from 'jquery';

import store from '../store';

const SingleQuestion = React.createClass({
  getInitialState: function() {
    console.log(this.props.categoryId);
    return {
      id: null,
      answer: '',
      question: '',
      value: null
    }
  },
  componentDidMount: function() {
    $.ajax({
      type: 'GET',
      url: `http://jservice.io/api/clues?category=${this.props.categoryId}`,
      success: (data) => {
        let question = data.find((question) => {
          let value = this.props.value;
          return question.value === Number(value);
        });
        store.questionCollection.data.add(question);
        this.setState(question);
      }
    })
  },
  selectQuestion: function(e) {
    let id = this.state.id;
    if (store.questionCollection.data.get(id)) {
      hashHistory.push(`/${this.state.id}`);
      document.getElementById(`${this.state.id}`).style.display = 'none';
    } else {
      console.log('invalid');
    }
  },
  render: function() {
    let question;
    if (!this.model) {
    }
    return(
      <li onClick={this.selectQuestion}>
        <h2 id={this.state.id}>${this.props.value}</h2>
      </li>
    );
  }
});

export default SingleQuestion;
