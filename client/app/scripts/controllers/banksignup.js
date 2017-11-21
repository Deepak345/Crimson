'use strict';

angular.module('clientApp')
.controller('BanksignupCtrl', function ($scope , $http , userservice , $location) {
  $scope.regForm = {
    name : "",
    contact : "",
    email : "",
    userid : "",
    password : "" ,
    address : "",
    category : "Public",
    nodalOfficerName : "",
    nodalOfficerNo : "",
    nodalOfficerEmail : ""
  };

  $scope.checkEmptyFields = function() {
    for (var prop in $scope.regForm) {
      if ($scope.regForm.hasOwnProperty(prop)) {
          if($scope.regForm[prop] === "") {
            console.log(prop)
            return false;
          }
      }
    }
    return true;
  };

  $scope.submit = function() {
    if($scope.checkEmptyFields()) {
      $http.post('/registerbank', $scope.regForm)
            .then(function(res) { console.log(res)
              if(res.data.msg){
                alert(res.data.msg);
              }else{
                console.log(res.data);
                userservice.storeInfo(res.data);
                $location.path("orgdashboard");
              }
            } , function(err){
              console.log(err);
            });
      } else {
        alert("One or More Fields Empty!!");
      }
  }

});