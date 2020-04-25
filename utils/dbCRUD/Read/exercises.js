const { model } = require('mongoose');
const exerciseSchema = require('../../../models/Exercise');
const Exercise = model('exercise', exerciseSchema);

module.exports = (response) => {
    return Exercise.find({}, (err, docs) => {
        if(!err){
            response.send(docs);
        }else {
            throw err;
        }
    })
};
