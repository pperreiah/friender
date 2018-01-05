// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
var app = express();

var friends = require("../data/server_script.js");

// Find Compatible Friend - takes in JSON input
app.post("/api/friends", function(req, res) {

    var bestFriend = 0;
    var bestFriendScore = 40;
    var friendScoreTally = "";

    //Find most compatible friend
    for (i = 0; i < friends.length; i++) {
        for (j = 0; j < friends.score.length; j++) {
            friendScoreTally = friendScoreTally + Math.abs(parseInt(friends[i].score[j]) - parseInt(newfriend.score[j]));
        }; //for 2
        if (friendScoreTally < bestFriendScore) {
            bestFriendScore = friendScoreTally;
            bestFriend = i;
        }; //if
        friendScoreTally = 0;
    }; //for 1

    res.json(friends[bestFriend]); //return json of most compatible 'best friend'
    bestFriend = 0;

}); //app.post
