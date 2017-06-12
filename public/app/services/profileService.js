angular.module('app')
    .service('profileService', function ($http) {
        this.getAllUsers = function() {
            return $http.get('/api/allusers')
                .then(function(response) {
                    return response
                 })
             }
         })