'use strict';

angular.module('clientApp')
  .controller('OrgsignupCtrl', function ($scope , $http ) {

    $scope.validateAndRegister = function () {
      if (!($scope.name && $scope.uname && $scope.contact && $scope.address && $scope.email && $scope.pwd)) {
        alert("All fields are compulsary");
        clearFields();
      }else{
        register();
      }
    }

    function register() {
       var userdetails = {
         name : $scope.name ,
         userid : $scope.uname ,
         password : $scope.pwd ,
         address : $scope.address ,
         contact : $scope.contact ,
         email : $scope.email
       } ;  console.log(userdetails);

       $http.post("/organizationsignup" , userdetails).then(function(res){
          if(res.data.msg) { console.log(res.data)
            alert(res.data.msg);
          }else{

          }
       },function(err){
         console.log(err);
       })
    }

    function clearFields() {
      $scope.name = null; $scope.uname = null; $scope.contact = null;
      $scope.address = null; $scope.email = null; $scope.pwd = null;
    }

  });