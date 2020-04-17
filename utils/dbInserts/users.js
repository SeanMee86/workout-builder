const { model } = require('mongoose');
const userSchema = require('../../models/User');
const workoutSchema = require('../../models/Workout');
const User = model('user', userSchema);
const Workout = model('workout', workoutSchema);

module.exports = {
    insertUserWorkout: (req, res) => {
        const { userId, workoutId} = req.body;
        User.findById(userId, (err, user) => {
            if(err){
                return res.json(err);
            }
            const workoutExists = user.workouts.some(workout => workout.workoutID === workoutId);
            if(workoutExists){
                res.send('Workout already in your list');
            }else {
                user.workouts.push({workoutID: workoutId});
                user.save();
                res.send(user);
            }
        })
    },
    getUserWorkouts: (req, res) => {
        const { userId } = req.body;
        User.findById(userId, (err, user) => {
            if(err){
                return res.json(err);
            }
            const workoutIdArray = user.workouts.map(workout => workout.workoutID);
            Workout.find({_id: {$in: workoutIdArray}}, (err, workouts) => {
                res.send(workouts);
            })
        })
    }
};