// public/service/app.service.js

'use strict';

angular.module('app.service', []).factory('AppService', ['$http', '$q', function($http, $q) {
    return {
        getUser: function() {
            var deffered = $q.defer();
            $http.get('/api/users').then(function(results) {
                deffered.resolve(results.data);
            }, function(err) {
                deffered.reject(err);
            });
            return deffered.promise;
        }
    };
}]);