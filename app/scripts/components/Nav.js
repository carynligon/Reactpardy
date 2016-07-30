import React from 'react';
import {Link} from 'react-router';

import session from '../models/session';

const Nav = React.createClass({
  logout: function() {
    session.logout();
  },
  render: function() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login" onClick={this.logout}>Logout</Link></li>
        </ul>
      </nav>
    );
  }
});

export default Nav;
