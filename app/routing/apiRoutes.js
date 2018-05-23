var friends = require("../data/friends.js");

module.exports = function(app) {

    //renders the user's survey results on the results page
    app.get("/api/results", function(req, res) {
        res.json(myresults)
    })

    //this takes in the results from the survey and pushes them to the empty myresults array in friends.js
    app.post("/api/friends", function(req, res) {
        myresults.push(body);
    })

}