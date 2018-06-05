//var friends = require("../data/friends");
var path = require("path");

module.exports = function(app) {

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
    // app.get("/results", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/results.html"));
    // })

    //defaults to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });


}