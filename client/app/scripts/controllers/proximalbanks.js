'use strict';

angular.module('clientApp')
.controller('ProximalCtrl', function ($http , $scope , $location , selectedbankservice) {console.log(selectedbankservice);

  $http.get("https://data.gov.in/node/3287321/datastore/export/json").then(function(res){ console.log(res.data);
  
   $scope.bankList = [];

   for(var i = 0 ; i < res.data.length ; i ++){
     if(res.data[i][2] === "Odisha"){
       $scope.bankList.push(res.data[i]);
     }
   } 
  
   // this.bankList = data ; 
  } , function(error){
    alert("Error getting data");
    console.log(error);
  });
  
  this.getMoreDetails = function(bank){
    selectedbankservice.storeInfo(bank);
    $location.path("proximalbanksdetails");
  }

});