(function () {

  window.VoteCountView = Backbone.View.extend({
    className: 'vote-count',
    template: _.getTemplate('vote-count'),

    initialize: function (options) {
      this.side = options.side;
      this.listenTo(this.collection, 'add remove', this.render);
    },
    render: function () {
      // Gets a new array of comment models that voted for our side
      var comments = this.collection.filterBySide(this.side);

      // We don't have a model, but we do have our vote count.
      // Updates the vote count via our template.
      var newCommentHtml = this.template({ count: comments.length });
//      $(this.el).html(newCommentHtml);
    }
  });

  var $root = $(".comment-wall");
  var template = $("#newVote-count").html();
  var sides = ["right", "left"];

  comments.on('read', function () {
    for(var i in sides){
      var side = sides[i];
      var count = comments.filterBySide(side).length;
      var newHtml = $.render(template, {count: count});
      $("." + side + "-side .vote-count").html(newHtml);
    }
  });

})();
