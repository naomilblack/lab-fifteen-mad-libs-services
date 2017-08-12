  var app = angular.module("madLibs");

  app.controller("inputController", function($scope, wordService, $location){
    $scope.input={};
    console.log("input controller working!");

    $scope.setInput = function() {
      wordService. setInput($scope.input);
      $location.path("/display");
    }


  });
