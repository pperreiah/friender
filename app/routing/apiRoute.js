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

//Where is the /api/friends located????
app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/friends.html"));
});


// Create New friends - takes in JSON input
app.post("/api/new", function(req, res) {

  var newfriend = req.body;
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  var bestFriend = "";
  var bestFriendScore = 40;
  var friendScoreTally = "";

  //Find most compatible friend
  for(i=0; i<friends.length; i++) {
  	for(j=0; j<friends.score.length; j++){
  		friendScoreTally = friendScoreTally + Math.abs(parseInt(friends[i].score[j]) - parseInt(newfriend.score[j]));
  	};
  	if (friendScoreTally < bestFriendScore) {
  		bestFriendScore = friendScoreTally;
  		bestFriend = i; 
  	};
  	friendScoreTally = 0;
  }

  friends.push(newfriend);

  res.json(friends[bestFriend]);  //return json of most compatible 'best friend'
  bestFriend = "";
});

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < friends.length; i++) {
//       if (chosen === friends[i].routeName) {
//         return res.json(friends[i]);
//       }
//     }

//     return res.json(false);
//   }
//   return res.json(friends);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});