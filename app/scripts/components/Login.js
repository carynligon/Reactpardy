import $ from 'jquery';
import React from 'react';
import session from '../models/Session';
import {hashHistory, Link} from 'react-router';

const Login = React.createClass({
  loginUser: function(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    session.save({
      username: username,
      password: password
    }, {
      success: function(model, response) {
        window.localStorage.setItem('authtoken', response._kmd.authtoken);
        model.unset('password');
        hashHistory.push('/');
      },
      error: function(response) {
        document.getElementById('username').style.color = '#f32424';
        document.getElementById('password').style.color = '#f32424';
        document.getElementById('error-message').textContent = 'Invalid username or password';
        console.log('error: ' + response);
      }
    });
  },
  render: function() {
    return (
      <form className="login-form" onSubmit={this.loginUser}>
        <input id="username" type="text" name="username" placeholder="username" ref="username"/>
        <input id="password" type="password" name="password" placeholder="password" ref="password"/>
        <p id="error-message"></p>
        <input type="submit" name="submit" value="submit"/>
      </form>
    );
  }
});

export default Login;
