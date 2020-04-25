const { model } = require('mongoose');
const userSchema = require('../../../models/User');
const User = model('user', userSchema);

module.exports = {
    getUsers: (res) => {
        return User.find({}, (err, docs) => {
            if(!err){
                res.send(docs);
            }else {
                throw err;
            }
        })
    },
    getUserWorkouts: (req, res) => {
        const { userId } = req.body;
        User.findById(userId, (err, user) => {
            if(err){
                return res.json(err);
            }
            res.send(user.workouts);
            // const workoutIdArray = user.workouts.map(workout => workout.workoutID);
            // Workout.find({_id: {$in: workoutIdArray}}, (err, workouts) => {
            //     if(err){
            //         res.send(err);
            //     }else {
            //         res.send(workouts);
            //     }
            // })
        })
    }
};
