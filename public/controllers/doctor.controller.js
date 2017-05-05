'use strict';
angular.module('doctor.controller', []).controller('DoctorController', [
    '$scope',
    '$rootScope',
    '$http',
    'DoctorService',
    function($scope, $rootScope, $http, DoctorService) {
        $scope.partialForm = 'empty';

        function initializeDoctor() {
            DoctorService.getdoctors().then((doctors) => {
                $scope.rdoctors = doctors;
            }, (err) => {
                console.log(err);
            });
        };

        $scope.addDoctor = function(cdoctor) {
            DoctorService.addDoctor(cdoctor).then((newDoctor) => {
                $scope.rdoctors.push(newDoctor);
                $scope.cdoctor = {};
            }, (err) => {
                console.log(err);
            });
        };

        initializeDoctor();

    }
]);