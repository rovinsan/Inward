// public/controllers/patient.archive.controller.js

'use strict';

angular.module('patient.archive.controller', []).controller('PatientArchiveController', [
    '$scope',
    '$routeParams',
    'PatientService',
    function($scope, $routeParams, PatientService) {
        $scope.dpatient = {};
        $scope.loading = true;

        function initializePatientArchive() {
            PatientService.getPatient($routeParams.bht).then((patientArchive) => {
                $scope.dpatient = patientArchive;
            }, (err) => {
                console.log(err);
            }).finally(() => {
                $scope.loading = false;
            });
        }

        initializePatientArchive();
    }
]);