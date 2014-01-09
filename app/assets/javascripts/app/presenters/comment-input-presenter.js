(function () {

  var $root = $('form.new-comment');

  $root.on('submit', function (e) {
    e.preventDefault();

    var newComment = {
      username: $('[name=username]', $root).val(),
      side: $('[name=side]', $root).val(),
      comment: $('[name=comment]', $root).val()
    };

    comments.create(newComment);
    console.log('New comment data:', newComment);

    $root.find('input[type="text"], textarea').val('');
  });

})();
