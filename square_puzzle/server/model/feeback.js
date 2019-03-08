var mongoose = require('mongoose');

// Create a Schema for Users
var FeebackSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 1}
}, { timestamps: true, upsert: true })

mongoose.model('Feeback', FeebackSchema);