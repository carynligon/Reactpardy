import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';

import Login from './components/Login';
import Home from './components/Home';
import Game from './components/Game';
import QuestionModal from './components/QuestionModal';
import Results from './components/Results';

const router = (
  <Router history={hashHistory}>
  <Route path="/login" component ={Login} />
  <Route path="/" component={Home} />
  <Route path="/game" component={Game}>
    <Route path="/game/:question" component={QuestionModal}/>
  </Route>
  <Route path="/results" component={Results}/>
  </Router>
);

export default router;
