// public/services/ward.service.js

'use strict';

angular.module('ward.service', []).factory('WardService', [
    '$http',
    '$q',
    function($http, $q) {
        return {
            getWardBeds: function() {
                let deferred = $q.defer();
                $http.get('/api/ward').then((results) => {
                    deferred.resolve(results.data);
                }, (err) => {
                    deferred.reject(err);
                });
                return deferred.promise;
            },

            addWardBed: function() {
                let deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: '/api/ward',
                    // data: $.param(),
                    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
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