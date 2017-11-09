'use strict';

angular.module('clientApp')
.controller('OrgeventCtrl', function ($location , $scope , userservice , $http , $routeParams) {console.log(userservice.getUserDetails());
  if(!userservice.checkSession()){
    $location.path("useroptions");
  }
  
  /* Get the current event 
    $http.get().then(function(res){
        $scope.event = res.data();
    }, function(error){

    });
  */
    
  alert($routeParams.id);
  
});