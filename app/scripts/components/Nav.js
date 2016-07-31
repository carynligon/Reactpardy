import React from 'react';
import {Link} from 'react-router';

import session from '../models/session';

const Nav = React.createClass({
  logout: function() {
    session.logout();
  },
  getInitialState: function() {
    let nav;
    if (!localStorage.authtoken) {
      nav =
      <ul id="login-btns">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    } else {
      nav =
      <ul id="login-btns">
        <li onClick={this.logout}>Logout</li>
      </ul>
    }
    return {links: nav};
  },
  render: function() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {this.state.links}
        </ul>
      </nav>
    );
  }
});

export default Nav;
