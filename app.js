const express = require("express");
const app = express();
const API2 = require("./Routes/API2/API2");
const API3 = require("./Routes/API3/API3");

// Middleware to parse JSON bodies
app.use(express.json());

// Use the router with a base path
app.use("/API2", API2);

app.use("/API3", API3);

// Listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
