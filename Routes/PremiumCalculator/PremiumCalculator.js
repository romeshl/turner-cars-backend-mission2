// Import the express module to create an Express application
const express = require("express");
// Initialize a new router instance to define API routes
const router = express.Router();

// Import the calculatePremium function from the calculatePremium module
const calculatePremium = require("./calculatePremium");

// Define a POST route on the root path ('/')
router.post("/", (req, res) => {
    // Try to execute the following block of code
    try {
        // Call calculatePremium with car_value and risk_rating from the request body
        const premiums = calculatePremium(req.body.car_value, req.body.risk_rating);
        // If successful, send the calculated premiums as the response with a 200 status code
        res.send(premiums).status(200);
    } catch {
        // If an error occurs, send a 400 status code with an error message
        res.status(400).send({ error: "there is an error" });
    }
});

// Export the router to be used in other parts of the application
module.exports = router;