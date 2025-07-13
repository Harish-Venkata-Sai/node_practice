const express = require('express');
const router = express.Router();
// model
const menu = require('./../models/menu');

// Menu
router.post('/menu', async (req, res) => {
    try{
        const data = req.body;

        const newMenu = new menu(data);

        const savedResponse = await newMenu.save();

        console.log('Data saved Successfully');
        res.status(200).json(savedResponse);
    } catch(err) {
        console.log('Internal Server Error');
        res.status(500).json({error: 'Error at internal server'});
    }
})

router.get('/menu', async (req, res) => {
    try{
        const data = await menu.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Error at internal serve'});
    }
})

// paramteriezed endpoints
router.get('/menu/:tasteChoice', async (req, res) => {
    try{
        const tasteChoice = req.params.tasteChoice;
        if(tasteChoice == 'sweet' || tasteChoice == 'spicy' || tasteChoice == 'sour') {
            const response = await menu.find({taste: tasteChoice});
            console.log('Response Fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({error: 'Invalid taste choice '});
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Error occured at internal server'});
    }
})


router.put('/menu/:id', async (req, res) => {
    try{
        const menuId = req.params.id;
        const receivedData = req.body;
        const response = await menu.findByIdAndUpdate(menuId, receivedData, {
            new: true, //return the updated contnet
            runValidators: true, //run mongoose validations
        });

        if(!response) {
            return res.status(404).json({error: 'Invalid object id'});
        }

        console.log('Data updated', response);
        res.status(200).json(response);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Error occured at internal server'});
    }
})

router.delete('/menu/:id', async (req, res) => {
    try{
        const menuId = req.params.id;
        const response = await menu.findByIdAndDelete(menuId);

        if(!response) {
            return res.status(404).json({error: 'Invalid object id'});
        }

        console.log('Data Deleted');
        res.status(200).json({message: 'Data deleted'});
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Error occured at internal server'});
    }
})

// export the module
module.exports = router;