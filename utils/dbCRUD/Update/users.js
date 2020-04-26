const { model } = require('mongoose');
const userSchema = require('../../../models/User');
const User = model('user', userSchema);

module.exports = {
    updateUserWorkouts: (req, res) => {
        User.findById(req.body.userId, (err, user) => {
            if(err){
                res.send(err);
            }
            user.workouts = user.workouts.map(workout => {
                if(workout._id.toString() === req.body.workout.id){
                    return req.body.workout;
                }
                return workout;
            })
            user.save()
            res.send(user.workouts);
        })
    }
}
