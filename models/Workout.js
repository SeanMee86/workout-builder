const {Schema} = require('mongoose');
const Exercises = require('./Exercise');

const Workout = new Schema({
    name: {
        type: String,
        required: true
    },
    workout: [
        Exercises
    ]
});

module.exports = Workout;