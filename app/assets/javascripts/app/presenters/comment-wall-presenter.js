(function () {

  window.CommentWall = function (options) {

    var commentTemplate = $('#templates .comment').html();
    var $root = options.root;
    var comments = options.comments;

    comments.on('create', function (newComment) {
      var newHtml = $.render(commentTemplate, newComment);
      $root.append(newHtml);
    });
  };


})();
