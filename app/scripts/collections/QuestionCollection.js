import Backbone from 'backbone';
import Question from '../models/Question';

const QuestionCollection = Backbone.Collection.extend({
  url: '',
  model: Question
})

export default QuestionCollection;
