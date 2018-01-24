'use strict';

angular.module('clientApp')
    .service('userservice', function ($http) {
        var currentUser = {};

     /*   $http.get("/checkloggedin").then(function(res){
            currentUser.isLoggedIn = true ;
            currentUser.userid = res.data.userid ;
            currentUser.id = res.data._id ; // the mongodb object id
            currentUser.name = res.data.name ;
            currentUser.contact = res.data.contact ;
            currentUser.email = res.data.email ;
            currentUser.events = res.data.events ;
            currentUser.userType = res.data.userType ;
            currentUser.address = res.data.address ;
            console.log(currentUser)
        },function(err){
            console.log(err);   
        }); */

        return {
            storeInfo: function (user) {
                currentUser.isLoggedIn = true;
                currentUser.userid = user.userid;
                currentUser.id = user._id; // the mongodb object id
                currentUser.name = user.name;
                currentUser.contact = user.contact;
                currentUser.email = user.email;
                currentUser.events = user.events;
                currentUser.userType = user.userType;
                currentUser.address = user.address;
            },
            checkSession: function () {
                    console.log(currentUser)
                    return currentUser.isLoggedIn;
            },
            /* setSession : function(){
                 
                     $http.get("/checkloggedin").then(function(res){
                         currentUser.isLoggedIn = true ;
                         currentUser.userid = res.data.userid ;
                         currentUser.id = res.data._id ; // the mongodb object id
                         currentUser.name = res.data.name ;
                         currentUser.contact = res.data.contact ;
                         currentUser.email = res.data.email ;
                         currentUser.events = res.data.events ;
                         currentUser.userType = res.data.userType ;
                         currentUser.address = res.data.address ;
                         console.log(currentUser)
                     },function(err){
                         console.log(err);   
                     });
                 
                 console.log(currentUser);
             }, */
            getUserDetails: function () {
                if (!currentUser) {
                    this.setSession();
                }
                return currentUser;
            },
            destroySession: function () {
                currentUser = {};
                console.log("logged out");
            }
        }
    });