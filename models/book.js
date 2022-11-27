const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: Date, 
        default: Date.now,
    },
    currentlyReading: {
        type: Boolean,
        required: true,
    },
    recommended: {
        type: Boolean,
        required: true,
    },
    recentlyRead: {
        type: Boolean,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Book', BookSchema)