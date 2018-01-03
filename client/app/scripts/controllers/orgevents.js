'use strict';

angular.module('clientApp')
  .controller('OrgeventCtrl', function ($location, $scope, userservice, $http, $routeParams) {

    var mailList = [];
    console.log(userservice.getUserDetails());
    if (!userservice.checkSession() || userservice.getUserDetails().userType !== "Organization") {
      $location.path("useroptions");
    }


    $http.get("getevent/" + $routeParams.id).then(function (res) {
      console.log(res);
      $scope.event = res.data;

        res.data.donors.forEach(function (element) {
          mailList.push(element.email);
        });

      console.log(mailList);

    }, function (error) {
      console.log(error);
    });

    $scope.notifyAll = function(){ console.log("here")
      $http.post("notifyall" , {
        "to": mailList , "subject": "sub", "text": "content",
        "from": userservice.getUserDetails().email,
        "organizer": userservice.getUserDetails().name ,
        "eventdetails" : $scope.event
      }).then(function(data){
         console.log(data)
      }, function(err){
        alert("Error occured");
        console.log(err);
      })
    }

    $scope.logout = function () {
      userservice.destroySession();
    }


    alert($routeParams.id);

  });