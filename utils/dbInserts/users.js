const { model } = require('mongoose');
const userSchema = require('../../models/User');
const User = model('user', userSchema);

module.exports = {
    insertUserWorkout: (req, res) => {
        const { userId, workoutData} = req.body;
        console.log(workoutData);
        User.findById(userId, (err, user) => {
            if(err){
                return res.json(err);
            }
            const workoutExists = user.workouts.some(workout => workout.name === workoutData.name);
            if(workoutExists){
                res.send('Workout already in your list');
            }else {
                user.workouts.push(workoutData);
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