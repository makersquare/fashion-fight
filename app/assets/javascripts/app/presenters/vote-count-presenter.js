(function () {

//  var $root = $(".comment-wall");
  var template = $("#newVote-count").html();
  var sides = ["right", "left"];

  comments.on('add', function () {
    for(var i in sides){
      var side = sides[i];
      var count = comments.filterBySide(side).length;
      var newHtml = $.render(template, {count: count});
      $("." + side + "-side .vote-count").html(newHtml);
    }
  });

})();
