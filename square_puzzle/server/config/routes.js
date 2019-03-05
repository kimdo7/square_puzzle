var games = require("./../controller/games")

module.exports = function (app) {
    app.get("/games", function (req, res) {
        games.getAll(req, res)
    })
}        