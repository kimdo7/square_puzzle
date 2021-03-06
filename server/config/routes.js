var path = require('path');
var games = require("./../controller/games")
var feedbacks = require("./../controller/feebacks")

module.exports = function (app) {
    app.get("/games", function (req, res) {
        games.getAll(req, res)
    })

    app.get("/gameById/:id", function (req, res) {
        games.getByID(req, res)
    })

    app.post("/gameByLevel", function (req, res) {
        games.getByLevel(req, res)
    })

    app.get("/solvedById/:id/:clicks", function (req, res) {
        games.solvedById(req, res)
    })

    app.post("/game", function (req, res) {
        games.add(req, res)
    })


    //********************FEEDBACK */

    app.get("/feedbacks", function(req, res){
        feedbacks.getAll(req, res)
    })

    app.post("/feedback", function(req, res){
        feedbacks.add(req, res)
    })

    // this route will be triggered if any of the routes above did not match
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}        