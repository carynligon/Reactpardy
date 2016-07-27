import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, Link} from 'react-router';

import router from './router';

ReactDOM.render(router, document.getElementById('container'));
