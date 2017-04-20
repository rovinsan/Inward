// public/controller/app.controller.js

'use strict';

angular.module('app.controller', []).controller('AppController', ['$scope', 'AppService', function($scope, AppService) {

    $scope.tagline = "This is from App Controller";

    $scope.getUser = function() {
        AppService.getUser().then(function(results) {
            $scope.results = results;
        }, function(err) {
            console.error(err);
        });
    };

}]);