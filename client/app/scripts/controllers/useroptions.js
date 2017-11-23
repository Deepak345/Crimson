'use strict';

angular.module('clientApp')
  .controller('UseropCtrl', function ($location, userservice, $http) {
    this.text = "user option works";
    this.userType = "Organization";
    this.userLogin = function (name, pwd, type) {
      if (name === "test" && pwd === "password") {
        userservice.userType = this.userType;
        userservice.storeInfo({ "userid": "test", "name": "Zairza", "contact": "9574647", "address": "101 B , Keshari Enclave", "email": "info@zairza.in", "_id": "100000000000", "userType": "Organization" })
        $location.path("orgdashboard");
      } else {
        var userdetails = {
          "userid": name,
          "password": pwd
        };
        $http.post("/userlogin", userdetails).then(function (res) {
          if (res.data.msg) {
            alert(res.data.msg)
          } else {
            userservice.storeInfo(res.data);
            $location.path("orgdashboard");
          }
          // 
          console.log(res.data);
        }, function (err) {
          console.log(err);
        });
      }
    }
  });