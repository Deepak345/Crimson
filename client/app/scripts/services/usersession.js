'use strict';

angular.module('clientApp')
.service('userservice',function(){
    var currentUser = {}; 

    return{
        storeInfo : function(user){
            currentUser.isLoggedIn = true ;
            currentUser.userid = user.userid ;
            currentUser.id = user._id ; // the mongodb object id
            currentUser.name = user.name ;
            currentUser.contact = user.contact ;
            currentUser.email = user.email ;
            currentUser.userType = user.userType ;
            currentUser.address = user.address ;
            currentUser.userType = user.userType ;
        },
        checkSession : function(){
            return currentUser.isLoggedIn ;
        },
        getUserDetails : function(){
            return currentUser; 
        } 
    }
});