// public/controllers/ward.controller.js

'use strict';

angular.module('ward.controller', []).controller('WardController', ['$scope', 'WardService', function($scope, WardService) {

    $scope.addBed = function() {
        WardService.addBed().then((newBed) => {
            $scope.wardBeds.push(newBed);
        }, (err) => {
            console.log(err);
        });
    }

    $scope.getBeds = function() {
        WardService.getBeds().then((wardBeds) => {
            $scope.wardBeds = wardBeds;
        }, (err) => {
            console.log(err);
        });
    }

    function get() {
        WardService.getBeds().then((wardBeds) => {
            $scope.wardBeds = wardBeds;
        }, (err) => {
            console.log(err);
        });
    }

    get();

}]);