const {model} = require('mongoose');
const exerciseSchema = require('../../models/Exercise');
const Exercise = model('exercise', exerciseSchema);

module.exports = (req, response) => {
    new Exercise({
        type: req.exerciseType,
        name: req.exerciseName,
        description: req.exerciseDescription,
        rest: req.exerciseRest,
        repetitions: req.exerciseReps
    }).save()
        .then(() => {
            response.send('Exercise Submitted')
        })
        .catch(err => {
            console.log(`Submission Failed Error Message: ${err}`)
        })
};