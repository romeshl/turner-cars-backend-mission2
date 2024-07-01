const express = require("express");
const router = express.Router();

// Define a POST route
router.post("/", (req, res) => {
  // Access POST data using req.body
  console.log(req.body);
  // Send a response
  res.send("This is API2");
});

module.exports = router;

