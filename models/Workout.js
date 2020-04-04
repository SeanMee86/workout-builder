const mongoose = require('mongoose');
const Exercises = require('./Exercise');

const Workout = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    workout: [
        Exercises
    ]
});

module.exports = Workout;