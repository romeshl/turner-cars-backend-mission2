const express = require("express");
const router = express.Router();

const calculatePremium = require("./calculatePremium");

// Define a POST route
router.post("/", (req, res) => {
  // Access POST data using req.body
  try {
    const premiums = calculatePremium(req.body.car_value, req.body.risk_rating);
    res.send(premiums).status(200);
  } catch {
    res.status(400).send({ error: "there is an error" });
  }
});

module.exports = router;