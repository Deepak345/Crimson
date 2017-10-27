'use strict';

angular.module('clientApp')
.controller('BanksignupCtrl',[ '$rootScope' , function ($rootScope) {
  this.text = "bank sign up works" ;
  $rootScope.color = 'blue';
  console.log($rootScope.color);
}]);