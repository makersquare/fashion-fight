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

  //presenter

  $root = $(".comment-wall");
  template = $("#newComment").html();

  comments.on('read', function (comments) {

    var newHtml = ""
    for (index in comments){
      newHtml += $.render(template, comments[index]);
    }
    $root.html(newHtml);

  });

})();
