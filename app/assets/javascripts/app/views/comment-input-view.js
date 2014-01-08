(function () {

  window.CommentInputView = Backbone.View.extend({
    events: {
      'submit': 'createComment'
    },
    createComment: function (e) {
      e.preventDefault();
      // This converts the form's input values into a nice javascript object
//      var newCommentData = _.formToJSON(this.el);
//      console.log('New comment data:', newCommentData);

      // Adds our new comment to the collection
      // this.collection.create(newCommentData);

      // Clears input values
//      $(this.el).find('input[type="text"], textarea').val('');
    }
  });

  var $root = $('.new-comment');
  $root.on('submit', function (e) {
    e.preventDefault();
    var newComment =  _.formToJSON($root);
    comments.create(newComment);
    console.log('New comment data:', newComment);
    $root.find('input[type="text"], textarea').val('')
  });



})();
