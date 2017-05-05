// public/js/app.js

'use strict';

angular.module('inwardApp', [
    'ngRoute',
    'appRoutes',
    'app.controller',
    'patient.controller',
    'patient.service',
    'drug.controller',
    'drug.service',
    'test.controller',
    'test.service'
]).run(['$rootScope', function($rootScope) {
    $rootScope.loggedinUser = '';
}]);