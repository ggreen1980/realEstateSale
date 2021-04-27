const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CommentSchema = new Schema({
  content: String,
},
    { timestamps: {}
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {Comment, CommentSchema}