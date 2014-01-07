(function () {

  window.Comment = Backbone.Model.extend({});

  window.CommentWall = Backbone.Collection.extend({
    model: Comment,

    filterBySide: function (side) {
      // Gets all comments that voted for the given side.
      return this.filter(function (comment) {
        return comment.get('side') === side;
      });
    }
  });


  window.Comments = function Comments(){
    var self = this,
      items = railsComments;
    $.observable(this);

    self.create = function(item){
      items.push(item);
      self.trigger("add", item)
    }

    self.destroy = function(){

    }
  }

})();
