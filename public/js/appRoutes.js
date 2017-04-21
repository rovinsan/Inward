// public/js/appRoutes.js

'use strict';

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            controller: 'AppController'
        })
        .when('/login', {
            templateUrl: 'account/login.jade',
            controller: 'AppController'
        });

    $locationProvider.html5Mode(true);
}]);