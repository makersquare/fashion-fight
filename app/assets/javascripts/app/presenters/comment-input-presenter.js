(function () {

  var $root = $('.new-comment');
  $root.on('submit', function (e) {
    e.preventDefault();
    var newComment =  _.formToJSON($root);

    comments.add(newComment);
    console.log('New comment data:', newComment);
    $root.find('input[type="text"], textarea').val('')
  });

})();
