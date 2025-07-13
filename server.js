const express = require('express')
const app = express();
const db = require('./db');

// bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send("Welcome to our Restaurant");
});

app.get('/menuCard', function(req,res) {
    var menu = {
        item1: 'Idli',
        item2: 'Sambhar',
        item3: 'Chutney'
    }
    res.send(menu);
})


// import the route
const personRoute = require('./Routes/personRoute');
const menuRoute = require('./Routes/menuRoute');
// Declare the endpoint to the route if not given inside the route file.
app.use('/person', personRoute);
app.use('/', menuRoute);

// To run the express surver
app.listen(3000, () => {
    console.log('listening on port 3000');
})