import Backbone from 'backbone';
import $ from 'jquery';

const CategoryModel = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: `http://jservice.io/api/category?id=18144`,
  getId: function(categoryId) {
    $.ajax({
      url: `http://jservice.io/api/category?id=${categoryId}`,
      success: (data) => {
        let pointDiff = 200;
        let category = data;
        let questionArr = category.clues.filter((question) => {
          if (question.value === pointDiff) {
            pointDiff += 200;
            return question;
          }
        });
        if (questionArr.length === 5) {
          category.clues = questionArr;
          this.set(category);
        } else {
          this.getId(Math.floor(Math.random() * 18400));
        }
      }
    })
  }
});

export default CategoryModel;
