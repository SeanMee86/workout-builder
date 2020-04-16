const express = require('express');
const router = module.exports = express.Router();
const { connect } = require('mongoose');
require('dotenv').config();
const insertExercise = require('../../utils/dbInserts/exercises');
const getExercises = require('../../utils/dbRetrieve/exercises');
const connectionString = process.env.CONNECTION_STRING;
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true};

const secureRoute = passport.authenticate('jwt', {session: false});


router.route('/api/exercises')
    .post(secureRoute, (req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                insertExercise(req.body, res);
            })
    })
    .get(secureRoute, (req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                getExercises(res);
            })
    });