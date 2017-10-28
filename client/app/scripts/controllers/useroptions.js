'use strict';

angular.module('clientApp')
.controller('UseropCtrl', function ($location , userservice) {
  this.text = "user option works" ;
  this.userType = "Organization" ;
  this.userLogin = function(name , pwd , type){
    if(name === "test" && pwd === "password"){
      userservice.userType = this.userType ;
      userservice.storeInfo({"userid" : "test" , "name" : "Zairza" , "contact" : "9574647" , "address" : "101 B , Keshari Enclave" , "email" : "info@zairza.in" , "id" : "100" , "userType" : })
      $location.path("orgdashboard");
    }else{
      this.username = null ;
      this.password = null ;
      alert("Invalid details provided");
    }
  }
});