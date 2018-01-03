'use strict';

angular.module('clientApp')
.controller('OrgdashCtrl', function ($location , userservice , $scope) {
  if(!userservice.checkSession()  || userservice.getUserDetails().userType !== "Organization"){ 
    $location.path("useroptions");
  } 

  $scope.events = userservice.getUserDetails().events ;

  $scope.logout = function() {
    userservice.destroySession();
  }

});