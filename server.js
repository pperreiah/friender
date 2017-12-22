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

// friends (DATA)
// =============================================================
var friends = [
  {
    "name": "Fred",
    "photo": "Flintstone",
    "age": 2929,
    "scores": [
        5,
        4,
        3,
        5,
        2,
        1,
        3,
        5,
        4,
        2
    ]
  },
  {
    "name": "Wilma",
    "photo": "Flintstone",
    "age": 2928,
    "scores": [
        5,
        4,
        3,
        5,
        2,
        1,
        3,
        2,
        4,
        2
    ]
  },
  {
    "name": "Barney",
    "photo": "Rubble",
    "age": 2930,
    "scores": [
        5,
        4,
        4,
        5,
        3,
        1,
        3,
        5,
        1,
        1
    ]
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("./app/public/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("./app/public/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "friends.html"));
});



//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === friends[i].routeName) {
//         return res.json(friends[i]);
//       }
//     }

//     return res.json(false);
//   }
//   return res.json(characters);
// });

// Create New friends - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newfriend = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  friends.push(newfriend);

  res.json(newfriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
