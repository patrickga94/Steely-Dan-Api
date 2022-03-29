const mongoose = require('mongoose')

const songsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        album: {
            type: String,
            required: true
        },
        lyrics: {
            type: String,
        },
        musicians: [{
            type: String
        }],
        released: {
            type: Date,
            required: true
        }
    }
)

module.exports = mongoose.model('Songs', songsSchema)

