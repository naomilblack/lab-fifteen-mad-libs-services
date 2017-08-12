(function() {

  var app = angular.module("madLibs");

  app.factory("wordService", function() {
    var input;

    return {
      setInput: function(value) {
        input = value;
        console.log("input in wordService", input);
      },
      getInput: function() {
        console.log("input in wordService", input);
        return input;
      }

    };




  })
})();
