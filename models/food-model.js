const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: String,
    title: String,
    url: String,
    tags: [],
    comments: [ { type: Schema.Types.ObjectId, ref: 'User' } ],
    date: String
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image
