const express = require('express');
const router = module.exports = express.Router();

const config = require('../../config');

const mongoose = require('mongoose');
const userSchema = require('../../models/User');
const User = mongoose.model('user', userSchema);
const exerciseSchema = require('../../models/Exercise');
const Exercise = mongoose.model('exercise', exerciseSchema);

const connectionString = process.env.CONNECTION_STRING || `mongodb+srv://${config.db.username}:${config.db.password}@${config.db.cluster}-day7y.mongodb.net/${config.db.name}?retryWrites=true&w=majority`;

const mongooseOptions = {useNewUrlParser: true, useUnifiedTopology: true};

router.route('/api/workouts')
    .get(async (req, res)=> {
    mongoose.connect(connectionString, mongooseOptions)
        .then(() => {
            return User.find({}, (err, docs) => {
                if(!err){
                    res.send(docs);
                }else {
                    throw err;
                }
            })
        });
    });

router.route('/api/exercises')
    .post((req, res) => {
        mongoose.connect(connectionString, mongooseOptions)
            .then(() => {
                console.log(req.body);
                new Exercise({
                    type: req.body.exerciseType,
                    name: req.body.exerciseName,
                    description: req.body.exerciseDescription,
                    rest: req.body.exerciseRest,
                    repetitions: req.body.exerciseReps
                }).save()
                    .then((mongoRes) => {
                        console.log(mongoRes);
                        res.send('Exercise Submitted')
                    })
                    .catch(err => {
                        console.log(`Submission Failed Error Message: ${err}`)
                    })
            })
    });