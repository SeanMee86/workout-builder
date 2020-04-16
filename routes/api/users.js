const express = require('express');
const router = module.exports = express.Router();
const { connect } = require('mongoose');
require('dotenv').config();
const getUser = require('../../utils/dbRetrieve/users');
const connectionString = process.env.CONNECTION_STRING;
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true};
const passport = require('passport');

const secureRoute = passport.authenticate('jwt', {session: false});

router.route('/api/users')
    .get(secureRoute, (req, res)=> {
    connect(connectionString, connectionOptions)
        .then(() => {
            getUser(res);
        });
    });

