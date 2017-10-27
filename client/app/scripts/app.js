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
  .config(function ($routeProvider) {
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
      .when('/upcomingcamps', {
        templateUrl: 'views/upcomingevents.html',
        controller: 'UpcomingeventCtrl',
        controllerAs: 'upev'
      })
      .when('/proximalbanks', {
        templateUrl: 'views/proximalbanks.html',
        controller: 'ProximalCtrl',
        controllerAs: 'proxcamp'
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
      .when('/organizationsignup', {
        templateUrl: 'views/organizationsignup.html',
        controller: 'OrgsignupCtrl',
        controllerAs: 'orgsignup'
      })
      .when('/banksignup', {
        templateUrl: 'views/banksignup.html',
        controller: 'BanksignupCtrl',
        controllerAs: 'banksignup'
      })
      .when('/regforbank', {
        templateUrl: 'views/regforbank.html',
        controller: 'BankregCtrl',
        controllerAs: 'bankreg'
      })
      .when('/regfororg', {
        templateUrl: 'views/regfororg.html',
        controller: 'OrgregCtrl',
        controllerAs: 'orgreg'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
