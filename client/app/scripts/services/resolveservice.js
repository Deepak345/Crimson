'use strict';

angular.module('clientApp')
.service('resolveservice',function($http){
     
    return {

         getList : function(){
             return $http.get("https://data.gov.in/node/3287321/datastore/export/json");
         }

    }
    

});