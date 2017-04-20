// public/js/appRoutes.js

'use strict';

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            controller: 'AppController'
        })
        .when('/user', {
            templateUrl: 'partials/user.jade',
            controller: 'UserController'
        });

    $locationProvider.html5Mode(true);
}]);