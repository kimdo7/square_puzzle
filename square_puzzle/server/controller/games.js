const mongoose = require('mongoose')
var Game = mongoose.model('Game')

// All necessary requires, such as the Quote model.
module.exports = {
    getAll: function (req, res) {
        Game.find().sort({ code: 1 }).exec(function (err, user_types) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "All User Types",
                    data: user_types
                })
        })
    },
};
