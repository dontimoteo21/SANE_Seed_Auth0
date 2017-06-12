// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
	.controller("profileCtrl", function($scope, user, authService, activitiesService, completedService, profileService) {

	  // VARIABLES
	  // ============================================================
		$scope.user = user;
		
	  // FUNCTIONS
	  // ============================================================
		$scope.getActivities = activitiesService.getActivities() 
			.then(function(response) {
					$scope.activities = response
			})

		$scope.getCompleted = completedService.getCompleted()
			.then(function(response) {
					$scope.completed = response
			})

		// $scope.getAllUsers = profileService.getAllusers() 
		// 	.then(function(response) {
		// 			$scope.allusers = response
		// 	})

		$scope.getActivitiesByName = activitiesService.getActivitiesByName() 
			.then(function(response) {
					$scope.activitiesname = response
			})
			 
		
		
		
		$scope.updateUser = function(user) {
			authService.editUser(user)
				.then(function(response) {
					$scope.user = response.data;
				});
		};

	});
