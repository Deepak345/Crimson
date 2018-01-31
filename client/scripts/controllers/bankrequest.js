'use strict';

angular.module('clientApp')
    .controller('BankReqCtrl', function ($scope, $http, $location, userservice) {

        if (!userservice.checkSession() || userservice.getUserDetails().userType !== "Blood Bank") {
            $location.path("useroptions");
        }

        $scope.reqForm = {
            name: userservice.getUserDetails().name ,
            address: userservice.getUserDetails().address ,
            contact: userservice.getUserDetails().contact ,
            email: userservice.getUserDetails().email ,
            request: {
                bloodGrp: "O+ve",
                bloodQuantity: "",
                content: "",
                dueDate: ""
            }
        };

        $scope.checkEmptyFields = function () {
            for (var prop in $scope.reqForm) {
                if ($scope.reqForm.hasOwnProperty(prop)) {
                    if ($scope.reqForm[prop] === "") {
                        return false;
                    }
                }
            }
            return true;
        };

        $scope.submit = function () {
            if ($scope.checkEmptyFields()) {
                $http.post('/postrequest', $scope.reqForm)
                    .then(function (res) {
                        console.log(res);
                        alert("Request Successful!");
                        $location.path('bankrequest');
                    });
            } else {
                alert("One or More Fields Empty!!");
            }
        }

        $scope.logout = function () {
            userservice.destroySession();
        }
    });