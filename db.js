// Import the mongoose library
const mongoose = require('mongoose');
// const { use } = require('react');
require('dotenv').config();


// Define the url
// const mongoURL = process.env.MONGODB_URL_LOCAL; // Local Database server
const mongoURL = process.env.MONGODB_URL; // Cloud Database Serve (Monogdb atlas)

// Setup the mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Get the default connection
// Mongoose maintains a default connection object representing the mongoDB connection
const db = mongoose.connection;


// Define event listeners for database connection
db.on('connected', ()=> {
    console.log("MongoDB server connected");
})

db.on('error', (err)=> {
    console.log("error occurred:", err);
})

db.on('disconnected', ()=> {
    console.log("MongoDB server disconnected");
})


// export the connection
module.exports = db;