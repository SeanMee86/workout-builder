const {Schema} = require('mongoose');
const Exercise = require('./Exercise');

const Workout = new Schema({
    name: {
        type: String,
        required: true
    },
    workout: [
        {
            exercise: Exercise,
            rest: String,
            repetitions: Number
        }
    ]
});

module.exports = Workout;