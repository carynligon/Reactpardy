import Backbone from 'backbone';
import {hashHistory} from 'react-router';

import settings from '../settings';

const Session = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/user/${settings.appKey}/login`,
  defaults: {
    username: '',
  },
  parse: function(response) {
    if (response) {
      return {
        authtoken: response._kmd.authtoken,
        username: response.username,
        fullname: response.fullname,
        userId: response._id
      };
    }
  },
  // retrieve: function() {
  //     this.fetch({
  //         url: `https://baas.kinvey.com/user/${settings.appKey}/_me`
  //     });
  // },
  logout: function() {
      this.save(null, `https://baas.kinvey.com/user/${settings.appKey}/_logout`);
      localStorage.clear();
      hashHistory.push('/login');
  }
});

let session = new Session();

export default session;
