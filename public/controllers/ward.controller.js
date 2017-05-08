// public/controllers/ward.controller.js

'use strict';

angular.module('ward.controller', []).controller('WardController', [
    '$scope',
    'WardService',
    function($scope, WardService) {

        $scope.addWardBed = function() {
            WardService.addWardBed().then((newBed) => {
                $scope.wardBeds.push(newBed);
            }, (err) => {
                console.log(err);
            });
        }

        $scope.getWardBeds = function() {
            WardService.getBeds().then((wardBeds) => {
                $scope.wardBeds = wardBeds;
            }, (err) => {
                console.log(err);
            });
        }

        function initializeWardBeds() {
            WardService.getWardBeds().then((wardBeds) => {
                $scope.wardBeds = wardBeds;
            }, (err) => {
                console.log(err);
            });
        }

        initializeWardBeds();

    }
]);