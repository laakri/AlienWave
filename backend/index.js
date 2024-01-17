const express = require("express");
const fs = require("fs");
const cors = require("cors"); // Import the cors module
const app = express();
const port = 3000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Route for the homepage
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route for the about page
app.get("/about", (req, res) => {
  res.send("About Page");
});

// Define a route to list movies
app.get("/list_movies", (req, res) => {
  fs.readFile(__dirname + "/" + "movies.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(data);
    }
  });
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
