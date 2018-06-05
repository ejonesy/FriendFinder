var friends = require("../data/friends.js");

module.exports = function(app) {

    //renders the user's survey results on the results page
    app.get("/api/results", function(req, res) {
        res.json(myresults)
    })

    //the post request that handles the incoming data and then sends it back to the results modal to display
    app.post("/api/friends", function(req, res) {
        //myresults.push(body);
        var matchName;
        var matchPhoto;
        var absoluteDifference;
        //this takes in the results from the survey and compares them to the scores in the friends array
        for (var i=0; i<friends.scores.length; i++) {
            absoluteDifference += Math.abs(friends[i].scores-myresults[i].scores)
            if (absoluteDifference < 5) {
                console.log ("You are now friends with ", friends[i]);
            } else {
                console.log("You are unfriendable, sorry.");
            }
        }
    });

}