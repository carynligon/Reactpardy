import React from 'react';
import {Router, Route, hashHistory, Link} from 'react-router';

import Home from './components/Home';
import Game from './components/Game';
import QuestionModal from './components/QuestionModal';

const router = (
  <Router history={hashHistory}>
  <Route path="/" component={Home} />
  <Route path="/game" component={Game}>
    <Route path="/game/:question" component={QuestionModal}/>
  </Route>
  </Router>
);

export default router;