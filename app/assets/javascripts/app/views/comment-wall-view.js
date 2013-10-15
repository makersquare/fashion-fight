(function () {

  window.CommentWallView = Backbone.View.extend({
    initialize: function (options) {
      this.listenTo(this.collection, 'add', this.addCommentToWall);
    },

    addCommentToWall: function (comment) {
      var view = new CommentView({ model: comment });
      view.render();
      $(this.el).append(view.el);
    }
  });

})();
