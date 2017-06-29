// public/controllers/patient.archive.controller.js

'use strict';

angular.module('patient.archive.controller', []).controller('PatientArchiveController', [
    '$scope',
    '$routeParams',
    'PatientService',
    'WardService',
    function($scope, $routeParams, PatientService, WardService) {
        $scope.dpatient = {};
        $scope.tpatient = {};
        $scope.dcpatient = {};
        $scope.allergy = {};
        $scope.availableBeds = {};
        $scope.availableWards = {};

        $scope.loading = true;
        $scope.archivePDF = false;
        $scope.archiveController = true;
        $scope.availableBedsDisabled = true;
        $scope.partialForm = 'null';

        function initializePatientArchive() {
            PatientService.getPatient($routeParams.bht).then((patientArchive) => {
                $scope.dpatient = patientArchive;
                $scope.selected = { discharge: patientArchive, transfer: patientArchive, allergy: patientArchive };
                $scope.allergy.patientID = patientArchive.patientID;
            }, (err) => {
                console.log(err);
            }).finally(() => {
                $scope.loading = false;
            });

            WardService.getWards().then((wards) => {
                $scope.availableWards = wards;
            }, (err) => {
                console.error(err);
            });
        }

        $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.data = [300, 500, 100];
        $scope.colors = ['#F44336', '#2196F3', '#673AB7'];
        $scope.options = {
            responsive: true,
            cutoutPercentage: 75,
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 20
                }
            },
        };

        $scope.current = 75;

        $scope.addAllergy = function() {
            $scope.allergy.patientID = $scope.dpatient.patientID;
            PatientService.addAllergy($scope.allergy).then(results => {
                $rootScope.growl("success", 'Allergy added to Patient ' + '');
            }, err => {
                console.error(err);
                $rootScope.growl("error", 'Something went wrong');
            });
        };

        $scope.getGreenBeds = function(wardNumber) {
            WardService.getGreenBeds(wardNumber).then((greenBeds) => {
                $scope.availableBeds = greenBeds;
                $scope.availableBedsDisabled = false;
            }, (err) => {
                console.error(err);
            });
        };

        $scope.dischargePatient = function() {
            $scope.dcpatient.patientID = $scope.dpatient.patientID;
            PatientService.dischargePatient($scope.dcpatient).then(results => {
                $rootScope.growl("success", 'Requested for Patient ' + $scope.dcpatient.patientID + ' Discharge');
                $scope.clearAll();
            }, (err) => {
                console.log(err);
                $rootScope.growl("error", 'Something went wrong');
            });
        };

        $scope.iTransferPatient = function() {
            $scope.tpatient.patientID = $scope.dpatient.patientID;
            PatientService.iTransferPatient($scope.tpatient).then(results => {
                $rootScope.growl("success", 'Patient ' + $scope.tpatient.patientID + ' Transfered Successfully');
                $scope.clearAll();
            }, err => {
                console.log(err);
                $rootScope.growl("error", 'Something went wrong');
            });
        };

        $scope.eTransferPatient = function() {
            $scope.tpatient.patientID = $scope.dpatient.patientID;
            PatientService.eTransferPatient($scope.tpatient).then(results => {
                $rootScope.growl("success", 'Patient ' + $scope.tpatient.patientID + ' Transfered Successfully');
                $scope.clearAll();
            }, err => {
                console.log(err);
                $rootScope.growl("error", 'Something went wrong');
            });
        };

        //Tab Functions
        $scope.tab = 1;
        $scope.tabSet = function(newTab) { $scope.tab = newTab; };
        $scope.tabIsSet = function(tabNumber) { return ($scope.tab === tabNumber); };

        initializePatientArchive();
    }
]);