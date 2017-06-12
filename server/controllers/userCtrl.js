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
		db.completed.getCompleted((err, completed) => {
			//console.log(completed)
			if(err) {
				throw err
			}
			res.status(200).json(completed)
		})
	},


	//UPDATE COMPLETED
	updateCompleted: function(req, res, next) {
		var updateCompleted = req.body;
		updateCompleted.completed_id = req.completed.completed_id;

		db.completed.save(updateCompleted, function(err, completed) {
			if(err) {
				console.log('Completed update error', err);

				return res.status(401)
					.send(err);
			}
			res.status(200).json(completed)
		})
	},

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
