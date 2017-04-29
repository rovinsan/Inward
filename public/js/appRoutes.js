// public/js/appRoutes.js

'use strict';

angular.module('appRoutes', []).config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', { // root of Dashboard
                templateUrl: 'template/dashboard',
                controller: 'AppController'
            })
            .when('/patient', {
                templateUrl: 'template/patient/patient.index',
                controller: 'PatientController'
            })
            .when('/summa', { // routing to another jade template for ng-view partial render
                templateUrl: 'template/summa',
                controller: 'AppController'
            })
            .otherwise({ // otherwise redirection
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }
]);