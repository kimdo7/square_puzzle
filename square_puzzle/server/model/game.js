var mongoose = require('mongoose');

// Create a Schema for Users
var GameSchema = new mongoose.Schema({
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    attempted: { type: Number, required: true, default: 0 },
    solved: { type: Number, required: true, default: 0 },
    best: { type: Number, required: true, default: 0 },
    clicks: [{ type: Number }]
}, { timestamps: true, upsert: true })

mongoose.model('Game', GameSchema);