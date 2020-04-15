const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { model, connect } = require('mongoose');
const userSchema = require('../models/User');
const User = model("user", userSchema);
const opts = {};
require('dotenv').config();
const connectionString = process.env.CONNECTION_STRING;
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_OR_KEY;
module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            connect(connectionString, connectionOptions)
                .then(() => {
                    User.findById(jwt_payload.id)
                        .then(user => {
                            if (user) {
                                console.log("passport run");
                                return done(null, user);
                            }
                            return done(null, false);
                        })
                        .catch(err => console.log(err));
                })
        })
    );
};