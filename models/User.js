const {Schema} = require('mongoose');
const Workout = require('./Workout');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    dateRegistered: {
        type: Date,
        default: Date.now()
    },
    workouts: [
        {
            workout: Workout
        }
    ]
});

module.exports = userSchema;