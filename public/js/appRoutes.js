// public/js/appRoutes.js

'use strict';

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/partials/user.html',
            controller: 'HomeController'
        })
        .when('/users', {
            template: `<div>Template Podala</div>`,
            controller: 'UserController'
        });

    $locationProvider.html5Mode(true);
}]);