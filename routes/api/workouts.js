const express = require('express');
const router = module.exports = express.Router();
const { connect } = require('mongoose');
require('dotenv').config();
const connectionString = process.env.CONNECTION_STRING;
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true};
const insertWorkout = require('../../utils/dbCRUD/Create/workouts');
const getWorkouts = require('../../utils/dbCRUD/Read/workouts');
const passport = require('passport');

const secureRoute = passport.authenticate('jwt', {session: false});

router.route('/api/workouts')
    .post(secureRoute, (req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                insertWorkout(req.body, res);
            })
    })
    .get(secureRoute, (req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                getWorkouts(res);
            })
    });
