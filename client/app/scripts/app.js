'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular

    .module('clientApp', [
        'ngRoute',
        'ngSanitize'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/upcomingevents', {
                templateUrl: 'views/upcomingevents.html',
                controller: 'UpcomingeventCtrl',
                controllerAs: 'upev'
            })
            .when('/postrequest', {
                templateUrl: 'views/postrequest.html',
                controller: 'PostRequestCtrl',
                controllerAs: 'poreq'
            })
            .when('/viewrequest', {
                templateUrl: 'views/viewrequest.html',
                controller: 'ViewRequestCtrl',
                controllerAs: 'vireq'
            })
            .when('/proximalbanks', {
                templateUrl: 'views/proximalbanks.html',
                controller: 'ProximalCtrl',
                controllerAs: 'proxcamp',
                resolve : {

                    mydata : function(resolveservice) { return resolveservice.getList(); }

                    }
                
            })
            .when('/proximalbanksdetails', {
                templateUrl: 'views/proximalbanksdetail.html',
                controller: 'ProximaldetCtrl',
                controllerAs: 'proxdetcamp'
            })
            .when('/useroptions', {
                templateUrl: 'views/useroptions.html',
                controller: 'UseropCtrl',
                controllerAs: 'userop'
            })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl',
                controllerAs: 'signup'
            })
            .when('/orgevents/:id', {
                templateUrl: 'views/orgevents.html',
                controller: 'OrgeventCtrl',
                controllerAs: 'orgevent'
            })
            .when('/organizationsignup', {
                templateUrl: 'views/organizationsignup.html',
                controller: 'OrgsignupCtrl',
                controllerAs: 'orgsignup'
            })
            .when('/sendmails', {
                templateUrl: 'views/sendmails.html',
                controller: 'SendmailCtrl',
                controllerAs: 'sendmail'
            })
            .when('/banksignup', {
                templateUrl: 'views/banksignup.html',
                controller: 'BanksignupCtrl',
                controllerAs: 'banksignup'
            })
            .when('/sharedlink/:id', {
                templateUrl: 'views/sharedlink.html',
                controller: 'LinkCtrl',
                controllerAs: 'link'
            })
            .when('/orgdashboard', {
                templateUrl: 'views/orgdashboard.html',
                controller: 'OrgdashCtrl',
                controllerAs: 'orgdash'
            })
            .when('/createcamp', {
                templateUrl: 'views/createcamp.html',
                controller: 'CreatecampCtrl',
                controllerAs: 'createcamp'
            })
            .when("/bankdashboard" , {
                templateUrl : 'views/bankdashboard.html' ,
                controller : 'BdashCtrl' ,
                controllerAs : 'bdash'
            })
            .otherwise({
                redirectTo: '/'
            });
    });