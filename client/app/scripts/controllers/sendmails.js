'use strict';

angular.module('clientApp')
    .controller('SendmailCtrl', function ($http, $scope, $location, userservice) {
        console.log(userservice.checkSession());
        /*if(!userservice.checkSession()){
          $location.path("useroptions");
        } */
        $scope.mailList = [{ "name": "STBC", "email": "stbc@odisha.gov.in" , "long" : 85.822 , "lat" : 20.359},
                             {"name" : "Kalinga Institute of Medical Sciences (KIMS) Blood Bank" , "email" : "bloodbank@kalingahospital.com"},
                             {"name" : "Kalinga Hospital Limited Blood Bank" , "email" : "bloodbank@kalingahospital.com"},
                             {"name" : "Apollo Hospital Blood Bank, Bhubaneswar" , "email" : "drsatish_m@apollohospitals.com"},
                             {"name" : "Hi-Tech Medical College & Hospital Blood Bank" , "email" : "bloodbankhitech@gmail.com"},
                             {"name" : "Sum Hospital Blood Bank" , "email" : "bloodbanksumhospital768@gmail.com"}];

       

    });