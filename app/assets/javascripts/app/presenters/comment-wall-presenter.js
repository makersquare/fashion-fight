(function () {

  var $root = $('.comment-wall');
  var commentTemplate = $('#templates .comment').html();

  comments.on('create', function (newComment) {
    var newHtml = $.render(commentTemplate, newComment);
    $root.append(newHtml);
  });

})();
