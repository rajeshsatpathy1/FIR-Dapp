const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')

const User = require('../models/user');

//Register
router.post('/register', function (req, res, next) {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password
    });

    User.addUser(newUser, function (err, user) {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
        }
        else {
            res.json({ success: true, msg: 'User registered' });
        }
    });
});

//Authenticate
router.post('/authenticate', function (req, res, next) {
    res.send('authenticate');
});

//Profile
router.get('/profile', function (req, res, next) {
    res.send('profile');
});

module.exports = router;