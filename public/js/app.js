// public/js/app.js

'use strict';

angular.module('inwardApp', [
    'ngRoute',
    'appRoutes',
    'app.controller',
    'patient.controller',
    'patient.service'
]).run(['$rootScope', function($rootScope) {
    $rootScope.loggedinUser = '';
}]);