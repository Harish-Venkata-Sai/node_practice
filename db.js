// Import the mongoose library
const mongoose = require('mongoose');
// const { use } = require('react');

// Define th url
// const mongoURL = 'mongodb://localhost:27017/db'; // Local Database server
const mongoURL = 'mongodb+srv://NodePractice:Node123@cluster0.nl7ffjn.mongodb.net/'; // Cloud Database Serve (Monogdb atlas)
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