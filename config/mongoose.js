// require the library
const mongoose = require('mongoose');
let mongo_url = process.env.mongo_url || 'mongodb://localhost:27017/'
// connect to the database
mongoose.connect(mongo_url);
console.log(mongo_url)
// aquire the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));

// up and running then print the message
db.once('open', function(){
    console.log('Connected to Database');
});

// exporting the database
module.exports = db;