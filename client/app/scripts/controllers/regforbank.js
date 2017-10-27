'use strict';

angular.module('clientApp')
.controller('BankregCtrl', function ($rootScope) {
    $rootScope.$apply(function(){
        $rootScope.color = "blue" ;
    });
  this.text = "reg sign up works" ;
});