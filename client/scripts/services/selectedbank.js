'use strict';

angular.module('clientApp')
.service('selectedbankservice',function(){
    var selectedBank = []; 

    return{
        storeInfo : function(data){
            selectedBank = data ;
        },
        getInfo : function(){
            return selectedBank ;
        }
    }
});