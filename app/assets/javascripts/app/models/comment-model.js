(function () {

  window.Comment = function () {
    var comments = [];

    $.observable(this);

    this.create = function (newComment) {
      comments.push(newComment);
      this.trigger('create', newComment);
    };

    this.filterBySide =  function (side) {
      var results = [];
      for (var i = 0; i < comments.length; i += 1) {
        var currentItem = comments[i];
        if (currentItem.side == side) {
          results.push(currentItem);
        }
      }
      return results;
    };

    this.initializeWith = function (initialComments) {
      for (var i = 0; i < initialComments.length; i += 1) {
        var c = initialComments[i];
        comments.push(c);
        this.trigger('create', c);
      }
    }

  };

})();
