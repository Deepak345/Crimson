'use strict';

angular.module('clientApp')
.controller('CreatecampCtrl', function ($location , $scope , userservice) {
  /*if(!userservice.checkSession()){
    $location.path("useroptions");
  }*/
  $scope.event = {};
  
  $scope.submit = function(event){
    event.conductor = { "typeOf" : userservice.getUserDetails().userType , "details" : userservice.getUserDetails().id};
    console.log(event);
  }
  
});