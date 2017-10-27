'use strict';

angular.module('clientApp')
.controller('OrgsignupCtrl', function ($scope , $rootScope ) {
    
            console.log($rootScope);
            this.text = $rootScope.color ;
            this.msg = "organization sign up works" ;
   // ;
  console.log($rootScope.color);
});