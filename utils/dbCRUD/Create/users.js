const { model } = require('mongoose');
const userSchema = require('../../../models/User');
const User = model('user', userSchema);

module.exports = {
    insertUserWorkout: (req, res) => {
        const { userId, workoutData} = req.body;
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
                res.send(workoutData);
            }
        })
    }
};
