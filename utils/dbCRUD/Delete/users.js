const { model } = require('mongoose');
const userSchema = require('../../../models/User');
const User = model('user', userSchema);

module.exports = {
    deleteUserWorkout: (req, res) => {
        User.findById(req.user.id, (err, user) => {
            if(user) {
                if (err) res.send(err);
                user.workouts = user.workouts.filter(workout => workout['_id'].toString() !== req.body.workoutId);
                user.save();
                res.send(user.workouts);
            }
        })
    }
};

