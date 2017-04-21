// public/controller/user.controller.js

'use strict';

angular.module('user.controller', []).controller('UserController', ['$scope', function($scope) {
    $scope.tagline = "This is from User Controller";
}]);