const path     = require('path');
const express  = require('express');
const mongoose = require('mongoose');

// SERVER MIDDLEWARE
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const passport     = require('passport');

// LOAD CONFIG FILES
const config = require('./src/server/config.js');

// CONNECT TO MONGOOSE DB
require('./src/server/models').connect(config.dbUri); // connect to our database

// EXPRESS APP SETUP
const app = express();
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: false })) // parse HTTP body messages
app.use(cookieParser()); // read cookies (needed for auth)

// PASSPORT INITIALIZATION
app.use(passport.initialize());
// --- load passport strategies ---
const localSignupStrategy = require('./src/server/passport/local-signup');
const localLoginStrategy = require('./src/server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);
// --- pass the authenticaion checker middleware ---
const authCheckMiddleware = require('./src/server/middleware/auth-check');
app.use('/app', authCheckMiddleware);

// ROUTES
// --- serve FRONT-END ---
app.use('/', express.static('dist'));
// --- serve BACK-END ---
const authRoutes = require('./src/server/routes/auth');
const apiRoutes = require('./src/server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// LAUNCH
app.listen(config.port);
console.log('The magic happens on port ' + config.port);