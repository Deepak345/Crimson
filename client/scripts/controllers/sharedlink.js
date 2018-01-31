'use strict';

angular.module('clientApp')
.controller('LinkCtrl', function ($routeParams) {
    alert($routeParams.id);
  
});