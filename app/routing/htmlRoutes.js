// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {

    if (req === "/") {
        res.sendFile(path.join(__dirname, "home.html"));
    } else {
        res.sendFile(path.join(__dirname, "home.html"));
    };

});

app.get("/survey", function(req, res) {

    if (req === "/survey") {
        res.sendFile(path.join(__dirname, "survey.html"));
    } else {
        res.sendFile(path.join(__dirname, "home.html"));
    };

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});