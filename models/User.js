const {Schema} = require('mongoose');
const Workouts = require('./Workout');

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
        Workouts
    ]
});

module.exports = userSchema;