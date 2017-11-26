'use strict';

angular.module('clientApp')
.controller('BdashCtrl', function ($location , userservice) {
  if(!userservice.checkSession() || userservice.getUserDetails().userType !== "Blood Bank"){ 
    $location.path("useroptions");
  } 

});