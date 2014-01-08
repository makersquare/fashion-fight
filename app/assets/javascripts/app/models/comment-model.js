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


  var Comments = function Comments(){
    this.items = [];
    var self = this;
    $.observable(this);

    this.create = function(item){
    };

    this.add = function(item){
      self.items.push(item);
      self.trigger('add', item);
    };

    this.filterBySide =  function (side) {
      return _.filter(items, function(item){return item.side === side});
    };

  }

  window.comments = new Comments();

})();
