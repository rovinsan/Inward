// public/controller/app.controller.js

'use strict';

angular.module('app.controller', []).controller('AppController', [
    '$scope',
    '$rootScope',
    '$http',
    '$location',
    function($scope, $rootScope, $http, $location) {
        $scope.tagline = "This is from App Controller";
    }
]);