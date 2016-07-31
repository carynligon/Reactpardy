import QuestionCollection from './collections/QuestionCollection';
import Score from './models/Score';
import UserCollection from './collections/UserCollection';


let store = {
  questionCollection: {
    data: new QuestionCollection()
  },
  score: new Score(),
  userCollection: new UserCollection()
}

export default store;
