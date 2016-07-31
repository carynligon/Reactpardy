import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, Link} from 'react-router';

import session from './models/Session';
import settings from './settings';

import router from './router';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  if (jqueryAjax.url.indexOf('jservice') === -1) {
    if (localStorage.getItem('authtoken')) {
      xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + localStorage.authtoken);
    } else {
      xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
    }
  }
});

ReactDOM.render(router, document.getElementById('container'));
