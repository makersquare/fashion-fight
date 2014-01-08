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
    var items = [],
      self = this;
    var contestUrl = "/contests/" + contest.id;
    $.observable(this);

    this.create = function(item){
      items.push(item);
      $.post( "/api" + contestUrl + "/comments", item, function() {
        self.trigger('add', item);
        self.read();
      });
    };

    this.read = function(index){
      $.get(contestUrl, function( data ) {
        items = data;
        self.trigger('read', items);
        console.log(data);
      });
    };

//    this.destroy = function(index){
//      items.splice(index,1);
//      self.trigger('destroy', index);
//    };

    this.filterBySide =  function (side) {
      return _.filter(items, function(item){return item.side === side});
    };
//
//    self.update = function(index, item){
//      items[index] = item;
//      items.trigger('update', index, item)
//    };
  }

  window.comments = new Comments();
  comments.read();

})();
