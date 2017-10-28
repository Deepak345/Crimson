'use strict';

angular.module('clientApp')
.controller('UpcomingeventCtrl', function ($scope, $http) {
  this.text = "upcoming event works" ;

  $http.get('/getallevents').then(function(res) {
    console.log(res);
    $scope.events = res.data;
  });

  $scope.register = function(id) {
    console.log(id);
  };
});