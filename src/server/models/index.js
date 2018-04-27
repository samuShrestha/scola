const mongoose = require('mongoose');

module.exports.connect = (uri) => {
    mongoose.connect(uri); // connect to URI
    mongoose.Promise = global.Promise; // plug in the promise library

    mongoose.connection.on('error', (err) => {
        console.error(`Mongoose connection error: ${err}`);
        process.exit(1);
    });

    // LOAD MODELS
    require('./user');
};