'use strict';

angular.module('clientApp')
    .controller('UpcomingeventCtrl', function($scope, $http, $route) {
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

        <<
        << << < HEAD
        $scope.register = function() {
            console.log($scope.eventId);
            $http.post('/registertoevent', { eventId: $scope.eventId, donor: $scope.donor }).then(function(res) {
                console.log(res);
                $location.path("upcomingevents");
            });
        };
    }); ===
=== =
$scope.register = function() {
console.log($scope.eventId);
$http.post('/registertoevent', { eventId: $scope.eventId, donor: $scope.donor }).then(function(res) {
    console.log(res);
    if (!res.data.msg) {
        alert(res.data.msg);
    }
    // $location.path("upcomingevents");
    // $route.reload();
});
};
}); >>>
>>> > bbe5f0f83e72d1fdf1dfb3849b6d5b1795d31d8e