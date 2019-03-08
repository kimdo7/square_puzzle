const mongoose = require('mongoose')
var Feeback = mongoose.model('Feeback')

// All necessary requires, such as the Quote model.
module.exports = {
    getAll: function (req, res) {
        Feeback.find({}, function (err, data) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "All Feeback",
                    data: data
                })
        })
    },

    add: function (req, res) {
        Feeback.create(req.body, function (err) {
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "Add new feeback",
                })
        })
    }
};
