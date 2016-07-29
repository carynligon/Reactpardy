import QuestionCollection from './collections/QuestionCollection';
import Score from './models/Score';


let store = {
  questionCollection: {
    data: new QuestionCollection()
  },
  score: new Score()
}

export default store;
