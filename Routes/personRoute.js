const express = require('express');
const router = express.Router();
// model
const Person = require('../models/person');

// Person
router.post('/', async (req, res)=> {
    try{
        const data = req.body; // The data will stored in 'req.body' after getting parsed from body-parser
    
        const newPerson = new Person(data); // This will make sure that the data is in form of the model

        //save the newPerson to the database
        const response = await newPerson.save();
        console.log('Data saved successfully');
        res.status(200).json(response);
    } catch(err) {
        console.log('Error occured');
        res.status(500).json({error: 'Error at Internal server'});
    }
})

router.get('/', async (req, res) => {
    try{
        const data = await Person.find();
        console.log('Data Fetched');
        res.status(200).json(data);
    } catch(err) {
        console.log('Error Occured');
        res.status(500).json({error: 'Error occured at data fetching'});
    }

})

module.exports = router;