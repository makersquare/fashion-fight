(function () {

  var $root = $('.new-comment');
  $root.on('submit', function (e) {
    e.preventDefault();
    var newComment =  _.formToJSON($root);

    //start state
    //comments.add(newComment);
    comments.create(newComment);
    console.log('New comment data:', newComment);
    $root.find('input[type="text"], textarea').val('')
  });

})();
