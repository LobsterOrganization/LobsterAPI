require('dotenv').config();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
const User = require('../models/user.model')
const passport = require('passport')

const config = require('config');
const s = config.get('privateKey');



opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get('privateKey');


//passport.use(new JwtStrategy(opts, function (jwt_payload, done) {user.find(), function(err, user){return done(err,user)}}
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ mail: jwt_payload.mail }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));
