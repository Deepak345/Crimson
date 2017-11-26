'use strict';

angular.module('clientApp')
  .controller('UseropCtrl', function ($location, userservice, $http) {
    this.text = "user option works";
    this.userType = "Organization";
    this.userLogin = function (name, pwd, type) {

      var userdetails = {
        "userid": name,
        "password": pwd
      };

      if (this.userType == "Organization") {
        $http.post("/userlogin", userdetails).then(function (res) {
          if (res.data.msg) {
            alert(res.data.msg)
          } else {
            res.data.userType = "Organization" ;
            userservice.storeInfo(res.data);
            $location.path("orgdashboard");
          }
        }, function (err) {
          console.log(err);
        });
      } else {
        $http.post("/banklogin", userdetails).then(function (res) {
          if (res.data.msg) {
            alert(res.data.msg)
          } else {
            res.data.userType = "Blood Bank" ;
            userservice.storeInfo(res.data);
            $location.path("bankdashboard");
          }
        }, function (err) {
          console.log(err);
        })
      }
    }
  });