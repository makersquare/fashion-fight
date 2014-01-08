(function () {

  $root = $(".comment-wall");
  template = $("#newComment").html();

  comments.on('add', function () {
    items = comments.items;
    var newHtml = "";
    for (index in items){
      newHtml += $.render(template, items[index]);
    }
    $root.html(newHtml);

  });

})();
