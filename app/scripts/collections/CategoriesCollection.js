import Backbone from 'backbone';
import _ from 'underscore';
import CategoryModel from '../models/CategoryModel';

const CategoriesCollection = Backbone.Collection.extend({
  url: `http://jservice.io/api/category?id=18144`,
  model: CategoryModel,
  newGame: function() {
    this.reset();

    _(6).times(() => {
      this.add({});
    });
    
    this.each((categoryModel) => {
      categoryModel.getId(Math.floor(Math.random() * 18400));
    });
  }
})

export default CategoriesCollection;
