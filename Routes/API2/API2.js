const express = require("express");
const router = express.Router();

const calculateRiskRating = require("./calculateRiskRating");


// Define a POST route
router.post("/", (req, res) => {
    try {
        const riskRating = calculateRiskRating(req.body.claim_history);
        res.send({ risk_rating: riskRating }).status(200);
    }
    catch {
        res.status(400).send({ error: "there is an error" });
    }
});

module.exports = router;

