import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';

import Login from './components/Login';
import Signup from './components/Signup';
import Game from './components/Game';
import QuestionModal from './components/QuestionModal';
import Results from './components/Results';

const router = (
  <Router history={hashHistory}>
  <Route path="/" component={Game}>
    <Route path="/login" component ={Login} />
    <Route path="/signup" component ={Signup} />
    <Route path="/:question" component={QuestionModal}/>
  </Route>
  </Router>
);

export default router;
