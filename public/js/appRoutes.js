// public/js/appRoutes.js

'use strict';

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            controller: 'AppController'
        })
        .when('/login', {
            templateUrl: 'template/dashboard',
            controller: 'AppController'
        })
        .when('/summa', {
            templateUrl: 'template/summa',
            controller: 'AppController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
}]);