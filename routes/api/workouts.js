const express = require('express');
const router = module.exports = express.Router();
const { connect } = require('mongoose');
require('dotenv').config();
const connectionString = process.env.CONNECTION_STRING;
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true};
const insertWorkout = require('../../utils/dbInserts/workouts');
const getWorkouts = require('../../utils/dbRetrieve/workouts');

router.route('/api/workouts')
    .post((req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                insertWorkout(req.body, res);
            })
    })
    .get((req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                getWorkouts(res);
            })
    });