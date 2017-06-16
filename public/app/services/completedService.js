angular.module("app")
    .service("completedService", function($http) {
       
       
       
       
       
       //FUNCTIONS
       
        this.getCompleted = function() {
            return $http.get('/api/completed')
                .then(function(response) {
                    console.log(response)
                    return response
                })
        }
    })