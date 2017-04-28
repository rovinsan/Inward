// public/js/app.js

'use strict';

angular.module('inwardApp', ['ngRoute', 'appRoutes', 'app.controller', 'app.service']).run(['$rootScope', function($rootScope) {
    $rootScope.loggedinUser = '';
}]);