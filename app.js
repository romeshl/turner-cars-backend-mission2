// Import the express module
const express = require("express");

// Initialize an Express application
const app = express();

// Import routers from the respective APIs for modular route handling
const RiskRatingCalculator = require("./Routes/RiskRatingCalculator/RiskRatingCalculator");
const PremiumCalculator = require("./Routes/PremiumCalculator/PremiumCalculator");
const CarValueCalculator = require("./Routes/CarValueCalculator/CarValueCalculator");

// Middleware to parse JSON bodies
// This allows us to access request body data as JSON, which is essential for POST and PUT requests
app.use(express.json());

// Use the CarValueCalculator routes when the path starts with '/CarValueCalculator'
// This router handles all requests related to car value calculations
app.use("/CarValueCalculator", CarValueCalculator);

// Use the RiskRatingCalculator router for requests to '/RiskRatingCalculator'
// This router manages risk rating calculations for insurance purposes
app.use("/RiskRatingCalculator", RiskRatingCalculator);

// Use the PremiumCalculator router for requests to '/PremiumCalculator'
// This router is responsible for calculating insurance premiums
app.use("/PremiumCalculator", PremiumCalculator);

// Start the server on port 3000
// This makes the app listen for requests on port 3000, making it accessible via http://localhost:3000
app.listen(3000, () => {
  // Log a message when the server starts successfully, indicating it's ready to accept requests
  console.log("Server is running on http://localhost:3000");
});