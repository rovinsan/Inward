// public/controllers/patient.controller.js

'use strict';

angular.module('patient.controller', []).controller('PatientController', [
    '$scope',
    '$rootScope',
    '$http',
    '$PatientService',
    function($scope, $rootScope, $http, PatientService) {
        $scope.partialForm = 'empty';
        $scope.cpatient = { name: '', bht: '' };

        function initializePatients() {
            PatientService.getPatients().then((patients) => {
                $scope.patients = patients;
            }, (err) => {
                console.log(err);
            });
        }

        $scope.addPatient = function() {
            PatientService.addPatient($scope.cpatient).then((newPatient) => {
                $scope.patients.push(newPatient);
            }, (err) => {
                console.log(err);
            });
        };

        initializePatients();
    }
]);