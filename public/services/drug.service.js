// public/services/drug.service.js

'use strict';

angular.module('drug.service', []).factory('DrugService', [
    '$http',
    '$q',
    function($http, $q) {
        return {
            getDrugs: function() {
                let deferred = $q.defer();
                $http.get('/api/drug').then((results) => {
                    deferred.resolve(results.data);
                }, (err) => {
                    deferred.reject(err);
                });

                return deferred.promise;
            },

            getDrug: function(serial) {
                let deferred = $q.defer();
                $http.get('/api/drug/' + serial).then((results) => {
                    deferred.resolve(results.data);
                }, (err) => {
                    deferred.reject(err);
                });

                return deferred.promise;
            },

            addDrug: function(newDrug) {
                let deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: '/api/drug',
                    data: $.param(newDrug),
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