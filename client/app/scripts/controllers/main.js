'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function (userservice, $scope, $http ) {
    $scope.register = function() {
      console.log($scope.eventId);
      $http.post('/registertoevent', { eventId: $scope.eventId, donor: $scope.donor }).then(function(res) {
        console.log(res);
        if(res.data.msg !== undefined) {
          alert(res.data.msg);
        }
        // $location.path("upcomingevents");
        // $route.reload();
      });
    };
});
