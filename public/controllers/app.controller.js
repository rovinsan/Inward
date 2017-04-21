// public/controller/app.controller.js

'use strict';

angular.module('app.controller', []).controller('AppController', ['$scope', '$rootScope', '$http', '$location', 'AppService', function($scope, $rootScope, $http, $location, AppService) {
    $scope.tagline = "This is from App Controller";
}]);