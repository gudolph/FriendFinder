var friends = require("../data/friends")

var app = require('express')();
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        console.log(req.body.totals);
        var newFriend = req.body;
        for (var i = 0; i < newFriend.totals.length; i++) {
            newFriend.totals[i] = parseInt(newFriend.totals[i]);
        }
        friends.push(newFriend);
        res.json(friends);
        var friendIndex = 0;
        var minDifference = 25;
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].totals.length; j++) {
                var difference = Math.abs(newFriend.totals[j] - friends[i].totals[j]);
                totalDifference += difference;
            }
            if (totalDifference < minDifference) {
                friendIndex = i;
                minDifference = totalDifference;
            }
        }
    })
};
