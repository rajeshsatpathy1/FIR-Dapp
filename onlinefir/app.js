const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database, { useCreateIndex: true, useNewUrlParser: true });

//On connection
mongoose.connection.on('connected', function () {
    console.log('Connected to database ' + config.database);
});

//On error
mongoose.connection.on('error', function (err) {
    console.log('Database error ' + err);
});

const app = express();

const users = require('./routes/users');

//Port number
const port = 3000;

//CORS middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//Index route
app.get('/', function (req, res) {
    res.send('Invalid endpoint');
});

//Start Server
app.listen(port, function () {
    console.log('Server stared on port ' + port);
});