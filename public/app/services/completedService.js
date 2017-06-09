angular.module("app")
    .service("completedService", function($http) {
        this.getCompleted = function() {
            return $http.get('/api/completed')
                .then(function(response) {
                    return response
                })
        }
    })