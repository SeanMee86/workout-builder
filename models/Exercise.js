const mongoose = require('mongoose');

const Exercise = new mongoose.Schema({
    type: {type: String},
    name: {
        type: String,
        required: true
    },
    description: String,
    rest: String,
    repetitions: Number
});

module.exports = Exercise;