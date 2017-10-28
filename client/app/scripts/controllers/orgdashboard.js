'use strict';

angular.module('clientApp')
.controller('OrgdashCtrl', function ($location , userservice) {console.log(userservice.checkSession());
  if(!userservice.checkSession()){
    $location.path("useroptions");
  }
  this.text = "organization reg works" ;
});