// public/services/user.service.js

'use strict';

angular.module('user.service', []).factory('User', ['$http', function($http) {
    return {
        get: function() {
            return $http.get('/api/users');
        },

        // create: function(userData) {
        //     return $http.post('/api/users', userData);
        // },

    }
}]);