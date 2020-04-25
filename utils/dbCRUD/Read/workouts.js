const { model } = require('mongoose');
const workoutSchema = require('../../../models/Workout');
const Workout = model('workout', workoutSchema);

module.exports = (response) => {
    return Workout.find({}, (err, docs) => {
        if(!err){
            response.send(docs);
        }else {
            throw err;
        }
    })
};
