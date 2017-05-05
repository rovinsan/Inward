'use strict';

angular.module('doctor.service', []).factory('DoctorService', [
    '$http',
    '$q',
    function($http, $q) {
        return {
            getdoctors: function() {
                var deferred = $q.defer();
                $http.get('/api/doctor').then((results) => {
                    deferred.resolve(results.data);
                }, (err) => {
                    deferred.reject(err);
                });

                return deferred.promise;
            },
            addDoctor: function(newDoctor) {
                var deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: '/api/doctor',
                    data: $.param(newDoctor),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then((results) => {
                    deferred.resolve(results.data);
                }, (err) => {
                    deferred.reject(err);
                });

                return deferred.promise;
            }
        }
    }
]);