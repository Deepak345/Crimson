'use strict';

angular.module('clientApp')
.controller('OrgdashCtrl', function ($location , userservice , $scope , $http) {
  if(!userservice.checkSession()  || userservice.getUserDetails().userType !== "Organization"){ 
    $location.path("useroptions");
  } 

  $scope.events = userservice.getUserDetails().events ;

  $scope.logout = function() {
    $http.delete("/logout").then(function(){console.log("called")
      userservice.destroySession();
      $location.path("useroptions");
    },function(err){
      console.log(err)
    });
    console.log("destroyed")
  }

});