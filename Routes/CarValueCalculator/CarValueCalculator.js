const express = require('express');

// Initialize express router
const router = express.Router();

// Import the calculateCarValue function from another file
const calculateCarValue = require('./calculatorCarValue');

// Define the API endpoint for calculating the value of a car
router.post('/', (req, res) => {
    try {
        // Extract model and year from the request body and calculate the car value
        const carValue = calculateCarValue(req.body.model, req.body.year);
        // Send the calculated car value as the response with a 200 (OK) status code
        res.send(carValue).status(200);
    } catch {
        // In case of any errors during calculation, send a 400 (Bad Request) status code with an error message
        res.status(400).send({ error: "there is an error" });
    }
});

// Export the router for use in other parts of the application
module.exports = router;