const express = require('express');
const router = module.exports = express.Router();
const { connect } = require('mongoose');
require('dotenv').config();
const connectionString = process.env.CONNECTION_STRING;
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true};
const passport = require('passport');
const { deleteUserWorkout } = require("../../utils/dbCRUD/Delete/users");
const { insertUserWorkout } = require('../../utils/dbCRUD/Create/users');
const { getUserWorkouts, getUsers } = require('../../utils/dbCRUD/Read/users');
const { updateUserWorkouts } = require('../../utils/dbCRUD/Update/users');

const secureRoute = passport.authenticate('jwt', {session: false});

router.route('/api/users')
    .get(secureRoute, (req, res)=> {
    connect(connectionString, connectionOptions)
        .then(() => {
            getUsers(res);
        });
    });

router.route('/api/users/workouts')
    .post(secureRoute, (req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                insertUserWorkout(req, res);
            })
    })
    .delete(secureRoute, (req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                deleteUserWorkout(req, res);
            })
    })
    .put(secureRoute, (req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                updateUserWorkouts(req, res);
            })
    })

router.route('/api/users/getworkouts')
    .post(secureRoute, (req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                getUserWorkouts(req, res)
            })
    });


