'use strict';

angular.module('clientApp')
.controller('CreatecampCtrl', function ($location , $scope , $http , userservice) {
  /*if(!userservice.checkSession()){
    $location.path("useroptions");
  }*/
  
  $scope.submit = function(event){
    event.conductor = { "typeOf" : userservice.getUserDetails().userType , "details" : userservice.getUserDetails().id};
    console.log(event);
    $http.post("/createevent", { "event": event }).then(function(res) {
      console.log(res);
    });
    
  
  }
}); 