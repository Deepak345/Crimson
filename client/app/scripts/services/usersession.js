'use strict';

angular.module('clientApp')
.service('userservice',function(){
    var currentUser = {}; 

    return{
        storeInfo : function(user){
            currentUser.isLoggedIn = true ;
            currentUser.userid = user.userid ;
            currentUser.name = user.name ;
            currentUser.contact = user.contact ;
            currentUser.email = user.email ;
        },
        checkSession : function(){
            return currentUser.isLoggedIn ;
        }
    }
});