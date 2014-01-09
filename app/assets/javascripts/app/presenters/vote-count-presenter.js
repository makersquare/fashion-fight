(function () {

  window.VoteCounter = function (options) {

    var voteCountTemplate = $("#template .vote-count").html();

    var $root = options.root;
    var comments = options.comments;
    // We need to know which side we are counting!
    var side = options.side;


    comments.on('create', function (newComment) {
      // Get the total number of votes for whichever side the comment voted for
      var voteCount = comments.filterBySide(side).length;

      // Update the vote count on the page
      $root.text(voteCount);
    });
  };


})();
