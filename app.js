// Import the express module
const express = require("express");

// Initialize an Express application
const app = express();

// Import routers from the API2 and API3 directories
const API2 = require("./Routes/API2/API2");
const API3 = require("./Routes/API3/API3");

// Middleware to parse JSON bodies
// This allows us to access request body data as JSON
app.use(express.json());

// Use the API2 router for requests to /API2
// This means any request to /API2/* will be handled by the API2 router
app.use("/API2", API2);

// Use the API3 router for requests to /API3
// Similar to API2, but for routes defined in API3
app.use("/API3", API3);

// Start the server on port 3000
// This makes the app listen for requests on port 3000
app.listen(3000, () => {
  // Log a message when the server starts successfully
  console.log("Server is running on http://localhost:3000");
});