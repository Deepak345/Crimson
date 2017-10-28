'use strict';

angular.module('clientApp')
.controller('OrgsignupCtrl', function ($scope , $rootScope , userservice) {
    
            console.log($rootScope);console.log(userservice);
            this.text = userservice.getVal(); //$rootScope.color ;
            this.msg = "organization sign up works" ;
   // ;
  console.log($rootScope.color);
});