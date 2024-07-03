//app.js
console.log ('Hello World')

// Import the express module
const express = require("express")

// Create an instance of express
const app = express();

// Import the routes for API1 from the routes directory
const API1 = require('./routes/API1');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the API1 routes when the path starts with '/API1'
app.use('/API1', API1);

// Start the server on port 3000 and log a message to the console
app.listen(3000, () => {
    console.log('Server is running on port 3000')
});