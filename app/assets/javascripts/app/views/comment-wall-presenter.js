(function () {

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
