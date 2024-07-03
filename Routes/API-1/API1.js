const express = require('express');

const router = express.Router();

const carValue = require('./carValue.js');

// Define the API endpoint for calculating the value of a car
router.get('/', (req, res) => {
    // Extract the model and year from the query parameters
    const { model, year } = req.query;

    // Calculate the value of the car based on the model and year
    const result = carValue(model, parseInt(year, 10));
    
    // Return the result as JSON
    res.json(result);
});

// Define a default welcome message for the API

router.get('/', (_req, res) => {
    res.send('Welcome to API-1');
});

module.exports = router;
