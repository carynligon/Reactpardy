import React from 'react';
import {hashHistory} from 'react-router';

import $ from 'jquery';

import store from '../store';

const SingleQuestion = React.createClass({
  selectQuestion: function(e) {
    console.log(this.props);
    let id = this.props.id;
    hashHistory.push(`/${this.props.id}`);
    document.getElementById(`${this.props.id}`).style.display = 'none';
  },
  render: function() {
    return(
      <li id={this.props.id} onClick={this.selectQuestion}>
        <h2>${this.props.value}</h2>
      </li>
    );
  }
});

export default SingleQuestion;
