const {Schema} = require('mongoose');

const Exercise = new Schema({
    type: {type: String},
    name: {
        type: String,
        required: true
    },
    description: String,
});

module.exports = Exercise;