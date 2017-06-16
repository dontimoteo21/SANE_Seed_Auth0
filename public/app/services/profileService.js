angular.module("app")
    .service("profileService", function($http) {
        
        
        
        
        //FUNCTIONS
        // this.getAllUsers = function() {
        //     return $http.get('/api/allusers')
        //         .then(function(response) {
        //             return response
        //          })
        //      };
        //  });

         this.getTopFive = function() {
             return $http.get('/api/topfive')
                .then(function(response) {
                    return response
                })
         }
    
})
    