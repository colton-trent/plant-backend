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
    amount: {
        type: Number,
        default: 1,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Plant', plantSchema);