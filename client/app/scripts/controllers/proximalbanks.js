'use strict';

angular.module('clientApp')
    .controller('ProximalCtrl', function($http, $scope, $location, selectedbankservice) {

        var location;

        $http.get("https://data.gov.in/node/3287321/datastore/export/json").then(function(res) {


            $scope.bankList = [];

            navigator.geolocation.getCurrentPosition(function(position) {
            location = position.coords;
            
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i][2] === "Odisha") {
                    res.data[i][27] = distance(location.latitude, location.longitude, res.data[i][25], res.data[i][26]);
                    $scope.$apply(function() {
                    $scope.bankList.push(res.data[i]);
                    $scope.bankList.sort(function(a, b) {
                        return a[27] - b[27];
                    });
                    $scope.bankList = $scope.bankList.slice(0,10) ;
                    });
              
                }
            }
            });

      
        }, function(error) {
            alert("Error getting data");
            console.log(error);
        });

        this.getMoreDetails = function(bank) {
            selectedbankservice.storeInfo(bank);
            $location.path("proximalbanksdetails");
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