const {Schema} = require('mongoose');
const Exercise = require('./Exercise');

const Workout = new Schema({
    name: {
        type: String,
        required: true
    },
    submittedBy: String,
    workout: [
        {
            exercise: {
                type: Exercise,
                required: true
            },
            rest: String,
            repetitions: Number,
            distance: String,
            time: String
        }
    ]
});

module.exports = Workout;