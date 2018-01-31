'use strict';

angular.module('clientApp')
.controller('CreatecampCtrl', function ($location , $scope , $http , userservice) {console.log(userservice.getUserDetails());
  if (!userservice.checkSession()) {
    $http.get("/checkloggedin").then(function(res){
        if(res.data){
            userservice.storeInfo(res.data);
        }else{
            $location.path("useroptions");
        }    
    },function(err){
        console.log(err);   
    });
}
  
  $scope.submit = function(event){
    event.conductor = { "typeOf" : userservice.getUserDetails().userType , "details" : userservice.getUserDetails().id};
    console.log(event);
    $http.post("/createevent", { "event": event }).then(function(res) {
      console.log(res);
      $location.path("upcomingevents");
    });
    
  
  }
}); 