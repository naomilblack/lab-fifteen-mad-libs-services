var app = angular.module("madLibs");

app.controller("displayController", function($scope, wordService){
  $scope.words = wordService.getInput();
  

});
