const express = require('express');
const router = express.Router();

//Register
router.get('/register', function (req, res, next) {
    res.send('register');
});

//Authenticate
router.post('/authenticate', function (req, res, next) {
    res.send('authenticate');
});

//Profile
router.get('/profile', function (req, res, next) {
    res.send('profile');
});

//Validate
router.get('/validate', function (req, res, next) {
    res.send('validate');
});

module.exports = router;