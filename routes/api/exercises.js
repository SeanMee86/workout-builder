const express = require('express');
const router = module.exports = express.Router();
const { connect } = require('mongoose');
require('dotenv').config();
const insertExercise = require('../../utils/dbInserts/exercises');
const getExercises = require('../../utils/dbRetrieve/exercises');
const connectionString = process.env.CONNECTION_STRING;
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true};

router.route('/api/exercises')
    .post((req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                insertExercise(req.body, res);
            })
    })
    .get((req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                getExercises(res);
            })
    });