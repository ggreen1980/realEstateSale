const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OfficeSchema = new Schema({
    name: String,
    imagePath: String
},
    { timestamps: {}
})

const Office = mongoose.model('Office', OfficeSchema)

module.exports = Office