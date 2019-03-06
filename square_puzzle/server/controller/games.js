const mongoose = require('mongoose')
var Game = mongoose.model('Game')

// All necessary requires, such as the Quote model.
module.exports = {
    getAll: function (req, res) {
        Game.find().sort({ code: 1 }).exec(function (err, data) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "All Games",
                    data: data
                })
        })
    },

    add: function (req, res) {
        Game.create({ width: req.body.width, height: req.body.height }, function (err) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "Add game",
                })
        })
    },

    getByID: function (req, res) {
        Game.find({ _id: req.params.id }, function (err, data) {
            if (err)
                res.json({ message: "Error", error: err })
            else {
                data[0]["attempted"] += 1

                res.json({
                    message: "Success",
                    title: "Get Game",
                    data: data
                })

                /**
                 * Update attempted to db
                 */
                Game.update({ _id: req.params.id }, { attempted: data[0]["attempted"] }, function (err) {
                    if (err)
                        console.log(err)
                })
            }
        })
    },

    solvedById: function (req, res) {
        
        Game.find({ _id: req.params.id }, function (err, data) {
            if (err)
                res.json({ message: "Error", error: err })
            else {
                data[0]["solved"] += 1
                data[0]["best"] = (data[0]["best"] > req.params.clicks || data[0]["best"] == 0 ) ? req.params.clicks : data[0]["best"]

                res.json({
                    message: "Success",
                    title: "Updated Solved",
                    data: data
                })

                /**
                 * Update attempted to db
                 */
                Game.update({ _id: req.params.id }, {
                    solved: data[0]["solved"],
                    best: data[0]["best"]
                }, function (err) {
                    if (err)
                        console.log(err)
                })
            }
        })
    }

};
