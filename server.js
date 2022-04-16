require('dotenv').config();
const express = require("express");
const path = require("path"); // to call method join and create build path
const favicon = require("serve-favicon");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;

// Connect to the database
require('./config/database.js');

const app = express();


app.use(logger("dev"));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build'))); // runs build in same port


// api

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html')) // check build, then index.html to send to client
});


app.listen(PORT, () => {
    console.log(`Backend is listening on ${PORT}`)
});