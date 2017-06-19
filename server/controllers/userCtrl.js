// APP //
var app = require('./../index');
var db = app.get('db');

module.exports = {
	// RETURN CURRENT USER //
	me: function(req, res, next) {
		if (!req.user) {
			return res.status(200).send(null);
		}

		// Return user
		return res.status(200).send(req.user);
	},

	//GET ALL USERS
	getAllUsers: function(req, res, next) {
		db.user.getAllUsers((err, allusers) => {
			// console.log(user)
			if(err) {
				throw err
			}
			res.status(200).json(allusers)
		})
	},

	//GET TOP 5
	getTopFive: function(req, res, next) {
		// console.log("Made it to profile service in server")
		db.user.getTopFive((err, topfive) => {
			if(err) {
				throw err
			}
			res.status(200).json(topfive)
		})
	},

	//GET ALL ACTIVITIES
	getActivities: function(req, res, next) {
		db.activities.getActivities((err, activities) => {
			// console.log(activities)
			if(err) {
				throw err
			}
			res.status(200).json(activities)
		})

	},

	getActivitiesByName: function(req, res, next) {
		db.activities.getActivitiesByName((err, activitiesname) => {
			if(err) {
				throw err
			}
			res.status(200).json(activitiesname)
		})
	},

	//GET ALL COMPLETED ACTIVITIES
	getCompleted: function(req, res, next) {
		
		db.completed.getCompleted([req.user.users_id],(err, completed) => {
			//console.log(completed)
			if(err) {
				throw err
			}
			res.status(200).json(completed)
		})
	},


	//POSTCOMPLETED
	// postCompleted: function(req, res, next) {
	// 	var postCompleted = req.body;
	// 	updateCompleted.completed_id = req.completed.completed_id;

	// 	db.completed.save(updateCompleted, function(err, completed) {
	// 		if(err) {
	// 			console.log('Completed update error', err);

	// 			return res.status(401)
	// 				.send(err);
	// 		}
	// 		res.status(200).json(completed)
	// 	})
	// },

	// UPDATE CURRENT USER //
	updateCurrent: function(req, res, next) {
		var updateUser = req.body;
		updateUser.user_id = req.user.user_id;

		db.users.save(updateUser, function(err, user) {
			if (err) {
				console.log('User update error', err);

				return res.status(401)
					.send(err);
			}

			req.session.passport.user = user;

			res.status(200).send(user);
		});
	}
};
