import CategoriesCollection from './collections/CategoriesCollection';
import Score from './models/Score';
import UserCollection from './collections/UserCollection';


let store = {
  categoriesCollection: new CategoriesCollection(),
  score: new Score(),
  userCollection: new UserCollection()
}

export default store;
