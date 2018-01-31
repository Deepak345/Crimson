'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('BmailerCtrl', function ($scope, userservice, $location , $http ) {

        if (!userservice.checkSession() || userservice.getUserDetails().userType !== "Blood Bank") {
            $location.path("useroptions");
        }

        var tempArray = [] ;

        $http.get("https://data.gov.in/node/3287321/datastore/export/json").then(function (res) {
            var mydata = res.data;
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
                var _location = position.coords;

                for (var i = 0; i < mydata.length; i++) {
                    if (mydata[i][2] === "Odisha") {
                        mydata[i][27] = distance(_location.latitude, _location.longitude, mydata[i][25], mydata[i][26]);

                        tempArray.push({
                            "name": mydata[i][1],
                            "email": mydata[i][11],
                            "distance": mydata[i][27]
                        });

                    }
                } tempArray.sort(function (a, b) {
                    return a["distance"] - b["distance"];
                });

                $scope.$apply(function () {
                    $scope.mailList = tempArray ;
                });
            });
        });

        $scope.sendMail = function (email, sub, content) {
            console.log("here")
            $http.post("/sendemail", {
                "to": email, "subject": sub, "text": content,
                "from": userservice.getUserDetails().email,
                "organizer": userservice.getUserDetails().name
            }).then(function (res) {
                console.log(res);
                if (res.data.response === "Sent") {
                    $scope.subject = "";
                    $scope.content = "";
                    alert("Message has been sent.");
                } else {
                    alert("Email wasn't sent");
                }
            }, function (error) {
                console.log(error);
            })
        }

        $scope.logout = function () {
            userservice.destroySession();
        }

    });

function distance(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    dist = dist * 1.609344;
    return dist.toFixed(1);
}
