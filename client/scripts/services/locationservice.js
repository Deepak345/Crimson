'use strict';

angular.module('clientApp')
.service('locationservice',function(){
    var location ; 
    
    return {
        getValue : function(){
            return location ;
        },
        setValue : function(loc){
            location = loc ;
        }
    }
});