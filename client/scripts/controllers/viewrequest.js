'use strict';

angular.module('clientApp')
.controller('ViewRequestCtrl', function ($scope, $http, $location) {
    $scope.notices = [];
    $http.get('/viewrequest')
            .then(function(res) {
                console.log(res);
                $scope.notices = res.data;
            });
    
    $scope.saveNotice = function(id) {
        console.log(id);
        $scope.noticeId = id;
    };
    $scope.register = function() { 
        console.log($scope.eventId);
        $http.post('/registertonotice', { noticeId: $scope.noticeId, donor: $scope.donor }).then(function(res) {
            console.log(res);
            if (res.data.response !== undefined) {
                alert(res.data.response);
            } 
            location.reload();
        });
    }

});