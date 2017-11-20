'use strict';

angular.module('clientApp')
.controller('OrgeventCtrl', function ($location , $scope , userservice , $http , $routeParams) {console.log(userservice.getUserDetails());
  if(!userservice.checkSession()){
    $location.path("useroptions");
  }
  

    $http.get("getevent/" + $routeParams.id).then(function(res){
        console.log(res);
        $scope.event = res.data ;
    }, function(error){
      console.log(error);
    });
  
    
  alert($routeParams.id);
  
});