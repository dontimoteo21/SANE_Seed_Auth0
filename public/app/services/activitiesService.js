angular.module("app")
    .service("activitiesService", function($http) {
        this.getActivities = function() {
            return $http.get('/api/allactivities')
                .then(function(response){
                    return response
                })
        }
    })