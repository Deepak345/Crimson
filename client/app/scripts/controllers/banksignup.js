'use strict';

angular.module('clientApp')
.controller('BanksignupCtrl', function ($rootScope , userservice) {
  this.text = "bank sign up works" ;
  $rootScope.color = 'blue';
  console.log($rootScope.color);
});