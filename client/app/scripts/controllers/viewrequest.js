'use strict';

angular.module('clientApp')
.controller('ViewRequestCtrl', function ($scope, $http, $location) {
    $scope.notices = [];
    $http.get('/viewrequest')
            .then(function(res) {
                console.log(res);
                $scope.notices = res.data;
            });
});