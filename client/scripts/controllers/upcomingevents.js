'use strict';

angular.module('clientApp')
    .controller('UpcomingeventCtrl', function($scope, $http, $route , $location) {
        $scope.donor = {
            bloodGrp: "A+ve",
            gender: "Male"
        };

        this.text = "upcoming event works";

        $http.get('/getallevents').then(function(res) {
            console.log(res);
            $scope.events = res.data;
        });

        $scope.saveEvent = function(id) {
            console.log(id);
            $scope.eventId = id;
        };

        $scope.register = function() { alert("form submit")
            console.log($scope.eventId);
            $http.post('/registertoevent', { eventId: $scope.eventId, donor: $scope.donor }).then(function(res) {
                console.log(res);
                if (res.data.msg !== undefined) {
                    alert(res.data.msg);
                } 
                location.reload();
            });
        }
    });