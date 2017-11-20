'use strict';

angular.module('clientApp')
.controller('BanksignupCtrl', function ($scope) {
  $scope.regForm = {
    name : "",
    contact : "",
    email : "",
    city : "",
    district : "",
    state : "",
    category : "Public",
    pincode : "",
    nodalOfficerName : "",
    nodalOfficerNo : "",
    nodalOfficerEmail : ""
  };

  $scope.checkEmptyFields = function() {
    for (var prop in $scope.regForm) {
      if ($scope.regForm.hasOwnProperty(prop)) {
          if($scope.regForm[prop] === "") {
            return false;
          }
      }
    }
    return true;
  };

  $scope.submit = function() {
    if($scope.checkEmptyFields()) {
      $http.post('/registerbank', regForm)
            .then(function(res) {
              console.log(res);
              alert("Registration Successful!");
            });
      } else {
        alert("One or More Fields Empty!!");
      }
  }

});