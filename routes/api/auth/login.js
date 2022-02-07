const express = require('express');
const router = express.Router();
const {model, connect} = require('mongoose');
const userSchema = require('../../../models/User');
const User = model('user', userSchema);
require('dotenv').config();
const connectionString = process.env.CONNECTION_STRING;
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true};
const validateLoginInput = require('../../../utils/formValidators/login');
const bcrypt = require('bcrypt');
const secretOrKey = process.env.SECRET_OR_KEY;
const jwt = require('jsonwebtoken');

router.route('/api/users/login')
    .post((req, res) => {
        connect(connectionString, connectionOptions)
            .then(() => {
                const {errors, isValid} = validateLoginInput(req.body);

                if(!isValid) {
                    res.status(400).json(errors);
                }

                const password = req.body.password;

                const email = req.body.email.toLowerCase();

                User.findOne({ email })
                    .then(user => {
                        if(!user) {
                            res.status(404).json({email:'Email not found'})
                        }

                        bcrypt.compare(password, user.password)
                            .then((isMatch) => {
                                if(isMatch) {
                                    const payload = {
                                        id: user.id,
                                        name: user.name
                                    };

                                    jwt.sign(
                                        payload,
                                        secretOrKey,
                                        {expiresIn:31556926},
                                        (err, token) => {
                                            res.json({
                                                success: true,
                                                token: `Bearer ${token}`
                                            })
                                        }
                                    )
                                } else {
                                    res.status(400).json({password: 'Incorrect Password'})
                                }
                            })
                    })

            })
    });

module.exports = router;