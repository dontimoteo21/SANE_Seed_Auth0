// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
	.controller("profileCtrl", function($scope, user, authService, activitiesService, completedService) {

	  // VARIABLES
	  // ============================================================
		$scope.user = user;
		
	  // FUNCTIONS
	  // ============================================================
		$scope.getActivities = activitiesService.getActivities() 
			.then(function(response) {
					$scope.activities = response.data
			})

		$scope.getCompleted = completedService.getCompleted()
			.then(function(response) {
					$scope.completed = response.data
			})

		// $scope.getAllUsers = authService.getAllusers() 
		// 	.then(function(response) {
		// 			$scope.allusers = response
		// 	})
			 
		
		
		
		$scope.updateUser = function(user) {
			authService.editUser(user)
				.then(function(response) {
					$scope.user = response.data;
				});
		};

	});
