const { model } = require('mongoose');
const workoutSchema = require('../../models/Workout');
const Workout = model('workout', workoutSchema);

module.exports = (req, res) => {
    new Workout({
        name: req.name,
        workout: req.workout
    }).save()
        .then(res.send('Workout Submitted'))
        .catch(err => console.log(err));
};