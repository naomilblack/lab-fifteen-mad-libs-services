(function(){
  var app = angular.module("madLibs", ["ngRoute"]);

  app.config(function($routeProvider) {

    $routeProvider.when("/input", {
      templateUrl:"views/input.html",
      controller:"inputController"
    });

    $routeProvider.when("/display", {
      templateUrl:"views/display.html",
      controller:"displayController"
    });

    $routeProvider.otherwise({
      redirectTo:"/input"
    });


  });


})();
