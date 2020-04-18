const { model } = require('mongoose');
const workoutSchema = require('../../models/Workout');
const Workout = model('workout', workoutSchema);
const isEmpty = require('is-empty');

module.exports = (req, res) => {
    Workout.find({name: req.name}, (err, workout) => {
        if(isEmpty(workout)){
            new Workout({
                name: req.name,
                workout: req.workout
            }).save()
                .then((response) => {
                    res.send(response)
                })
                .catch(err => console.log(err));
        }else {
            res.status(500).send({
                message: 'We are sorry but that workout name is already taken, please try another name'
            });
        }
    })

};