const {Schema} = require('mongoose');
const Exercise = require('./Exercise');

const Workout = new Schema({
    name: {
        type: String,
        required: true
    },
    submittedBy: String,
    workout: {
        type: [
            {
                exercise: {
                    type: Exercise,
                    required: true
                },
                rest: String,
                sets: Number,
                repetitions: Number,
                distance: String,
                time: String
            }
        ],
        required: true
    }
});

module.exports = Workout;