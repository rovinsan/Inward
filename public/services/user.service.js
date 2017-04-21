// public/service/user.service.js

'use strict';

angular.module('user.service', []).factory('UserService', ['$http', '$q', function($http, $q) {
    return {
        getUser: function() {
            var deffered = $q.defer();
            $http.get('/api/users/').then(function(results) {
                deffered.resolve(results.data);
            }, function(error) {
                deffered.reject(error);
            });
            return deffered.promise;
        }
    };
}]);