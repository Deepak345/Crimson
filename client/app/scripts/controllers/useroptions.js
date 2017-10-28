'use strict';

angular.module('clientApp')
.controller('UseropCtrl', function ($location , userservice) {
  this.text = "user option works" ;
  this.userType = "Organization" ;
  this.userLogin = function(name , pwd , type){
    if(name === "test" && pwd === "password"){
      userservice.storeInfo({"userid" : "test" , "name" : "Zairza"})
      $location.path("upcomingapps");
    }else{
      this.username = null ;
      this.password = null ;
      alert("Invalid details provided");
    }
  }
});