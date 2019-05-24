const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

//Register
router.post('/register', function (req, res, next) {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        maritalStatus: req.body.maritalStatus,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        district: req.body.district,
        state: req.body.state,
        country: req.body.country,
        pincode: req.body.pincode,
        aadhar: req.body.aadhar,
        password: req.body.password,
        userType: req.body.userType,
        stationCode: req.body.stationCode
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
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, function (err, user) {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        User.comparePassword(password, user.password, function (err, isMatch) {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 86400 //1 day
                });

                let userWithoutPassword = JSON.parse(JSON.stringify(user));
                delete userWithoutPassword.password;

                res.json({
                    success: true,
                    token: 'bearer ' + token,
                    user: userWithoutPassword
                });
            }
            else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        });
    });
});


//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    res.json({ user: req.user });
});

//approve
router.post('/approve', function (req, res, next) {
    let officer = req.body;
    User.updateUser(officer, function (err, user) {
        if (err) {
            res.json({ success: false, msg: 'user not found' });
        }
        else {
            res.json({ success: true, msg: 'Officer approved' });
        }
    });
});

module.exports = router;