(function () {

  var voteCountTemplate = $("#template .vote-count").html();
  // Our root is split into two; the vote count for
  // contestant A, and the vote count for contentant B.
  var $root = {
    left: $('.showcase .left-side .vote-count'),
    right: $('.showcase .right-side .vote-count')
  };

  comments.on('create', function (newComment) {

    // Get the total number of votes for whichever side the comment voted for
    var voteCount = comments.filterBySide(newComment.side).length;

    // Select the correct side
    $voteCountElement = $root[newComment.side];
    // Update the vote count on the page
    $voteCountElement.text(voteCount);
  });

})();
