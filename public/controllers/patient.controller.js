// public/controllers/patient.controller.js

'use strict';

angular.module('patient.controller', []).controller('PatientController', [
    '$scope',
    '$rootScope',
    '$http',
    'PatientService',
    function($scope, $rootScope, $http, PatientService) {

        $(function() {
            var step = 0;
            var stepItem = $('.step-progress .step-slider .step-slider-item');

            if (step == 0) {
                $('.step-content .step-content-foot label[name="prev"]').addClass('out');
            }

            // Step Next
            $('.step-content .step-content-foot label[name="next"]').on('click', function() {
                var instance = $(this);
                if (stepItem.length - 1 < step) {
                    return;
                }
                if (step == (stepItem.length - 2)) {
                    instance.addClass('out');
                    instance.siblings('button[name="finish"]').removeClass('out');
                }
                $(stepItem[step]).addClass('active');
                $('.step-content-body').addClass('out');
                $('#' + stepItem[step + 1].dataset.id).removeClass('out');
                $('.step-content .step-content-foot label[name="prev"]').removeClass('out');
                step++;
            });

            // Step Last
            $('.step-content .step-content-foot button[name="finish"]').on('click', function() {
                if (step == stepItem.length) {
                    return;
                }
                $(stepItem[stepItem.length - 1]).addClass('active');
                $('.step-content-body').addClass('out');
                $('#stepLast').removeClass('out');
            });

            // Step Previous
            $('.step-content .step-content-foot label[name="prev"]').on('click', function() {
                var instance = $(this);
                $(stepItem[step]).removeClass('active');
                if (step == (stepItem.length - 1)) {
                    instance.siblings('label[name="next"]').removeClass('out');
                    instance.siblings('button[name="finish"]').addClass('out');
                }
                $('.step-content-body').addClass('out');
                $('#' + stepItem[step].dataset.id).removeClass('out');
                if (step <= 0) {
                    return;
                }
                step--;
            });
        });

        $scope.partialForm = 'null';
        $scope.cpatient = {};

        function initializePatients() {
            PatientService.getPatients().then((patients) => {
                $scope.rpatients = patients;
            }, (err) => {
                console.log(err);
            });
        }

        $scope.getPatient = function(bhtnumber) {
            PatientService.getPatient(bhtnumber).then((patient) => {
                $scope.dpatient = patient;
            }, (err) => {
                console.log(err);
            });
        };

        $scope.addPatient = function(cpatient) {
            PatientService.addPatient(cpatient).then((newPatient) => {
                $scope.rpatients.push(newPatient);
                $scope.cpatient = {};
            }, (err) => {
                console.log(err);
            });
        };

        initializePatients();
    }
]);