import Backbone from 'backbone';

const Question = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: '',
  defaults: {
    result: null
  }
});

export default Question;
