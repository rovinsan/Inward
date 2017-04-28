// public/js/app.js

'use strict';

angular.module('inwardApp', ['ngRoute', 'appRoutes', 'app.controller']).run(['$rootScope', function($rootScope) {
    $rootScope.loggedinUser = '';
}]);