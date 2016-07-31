import React from 'react';
import session from '../models/Session';
import {hashHistory, Link} from 'react-router';

import store from '../store';


const Signup = React.createClass({
  newUser: function(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    store.userCollection.create({
      username: username,
      password: password,
      name: name
    }, {
      success: function(response) {
        console.log('success: ' + response);
        hashHistory.push('/');
      },
      error: function(response) {
        console.log('error: ' + response);
      }
    });
  },
  render: function() {
    return (
      <form className="signup-form" onSubmit={this.newUser}>
        <input id="name" type="text" name="name" placeholder="name" ref="name"/>
        <input id="username" type="text" name="username" placeholder="username" ref="username"/>
        <input id="password" type="password" name="password" placeholder="password" ref="password"/>
        <input type="submit" name="submit" value="submit"/>
      </form>
    );
  }
});

export default Signup;
