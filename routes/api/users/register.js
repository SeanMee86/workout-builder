const express = require('express');
const router = express.Router();
const { connect, model } = require('mongoose');
const userSchema = require('../../../models/User');
require('dotenv').config();
const validateRegistrationForm = require('../../../utils/formValidators/register');
const connectionString = process.env.CONNECTION_STRING;
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true};
const User = model('user', userSchema);
const bcrypt = require('bcrypt');

router.route('/register')
    .post((req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                const { errors, isValid } = validateRegistrationForm(req.body);

                if(!isValid) {
                    return res.status(400).json(errors);
                }

                User.findOne({email: req.body.email})
                    .then(user => {
                        if(user) {
                            return res.status(400).json({email: "Email already exists"})
                        }else {
                            const newUser = new User({
                                name: req.body.name,
                                email: req.body.email,
                                password: req.body.password
                            });

                            bcrypt.genSalt(10, (err, salt) => {
                                bcrypt.hash(newUser.password, salt, (err, hash) => {
                                    if(err){
                                        throw err
                                    }
                                    newUser.password = hash;
                                    newUser
                                        .save()
                                        .then(user => res.json(user))
                                        .catch(err => console.log(err));
                                })
                            })
                        }
                    })
            })
    });

module.exports = router;