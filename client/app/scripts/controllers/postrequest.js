'use strict';

angular.module('clientApp')
.controller('PostRequestCtrl', function ($scope, $http, $location) {
    $scope.reqForm = {
        name: "",
        address: "",
        contact: "",
        email: "",
        request: {
            bloodGrp: "O+ve" ,
            bloodQuantity: "",
            content: "",
            dueDate: ""
        }
      };
    
      $scope.checkEmptyFields = function() {
        for (var prop in $scope.reqForm) {
          if ($scope.reqForm.hasOwnProperty(prop)) {
              if($scope.reqForm[prop] === "") {
                return false;
              }
          }
        }
        return true;
      };
    
      $scope.submit = function() {
        if($scope.checkEmptyFields()) {
          $http.post('/postrequest', $scope.reqForm)
                .then(function(res) {
                  console.log(res);
                  alert("Request Successful!");
                  $location.path('');
                });
          } else {
            alert("One or More Fields Empty!!");
          }
      }
});