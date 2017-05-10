// public/js/app.js

'use strict';

angular.module('inwardApp', [
    'angular-loading-bar',
    'ngAnimate',
    'ngRoute',
    'appRoutes',
    'app.controller',
    'patient.controller',
    'patient.service',
    'doctor.controller',
    'doctor.service',
    'drug.controller',
    'drug.service',
    'test.controller',
    'test.service',
    'ward.controller',
    'ward.service'
]).run(['$rootScope', function($rootScope) {
    $rootScope.loggedinUser = '';
    $rootScope.goBack = function() {
        window.history.back();
    };
}]);