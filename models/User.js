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
            workoutID: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = userSchema;