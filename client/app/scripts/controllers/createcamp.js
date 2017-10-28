'use strict';

angular.module('clientApp')
.controller('CreatecampCtrl', function ($location , $scope , userservice) {console.log(userservice.checkSession());
  if(!userservice.checkSession()){
    $location.path("useroptions");
  }
  
  $scope.event.name;
  $scope.event.venue;
  $scope.event.time ;
  $scope.event.content;
  $scope.event.conductor = { "typeOf" : userservice.userType , "details" : userService.id}
  $scope.event.
});