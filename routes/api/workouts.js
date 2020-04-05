const express = require('express');
const router = module.exports = express.Router();
const { connect } = require('mongoose');
require('dotenv').config();
const getUser = require('../../utils/dbRetrieve/user');
const connectionString = process.env.CONNECTION_STRING;
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true};

router.route('/api/users')
    .get((req, res)=> {
    connect(connectionString, connectionOptions)
        .then(() => {
            getUser(res);
        });
    });

