const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {
        type: String,
    },
    acquired: {
        type: Date,
    },
    sharing: {
        type: Boolean,
        default: false,
    },
    imageUrl: {
        type: String,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Plant', plantSchema);