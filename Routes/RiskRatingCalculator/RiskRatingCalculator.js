// Import the express module to create router
const express = require("express");
// Initialize the router from express
const router = express.Router();

// Import the calculateRiskRating function from the same directory
const calculateRiskRating = require("./calculateRiskRating");

// Define a POST route on the root path ('/')
router.post("/", (req, res) => {
    try {
        // Call calculateRiskRating with the claim_history from the request body
        const riskRating = calculateRiskRating(req.body.claim_history);
        // If successful, send back the risk rating with a 200 status
        res.send({ risk_rating: riskRating }).status(200);
    }
    catch {
        // If an error occurs, send a 400 status with an error message
        res.status(400).send({ error: "there is an error" });
    }
});

// Export the router to be used in other parts of the application
module.exports = router;