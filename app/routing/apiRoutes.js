var friends = require("../data/friends.js");
//app = express()

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function(req, res) {
        //if friends are compatible
        //push that req.body json to friends array, set res.json to true
        //else set res.json to false
    })

}