const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AssociateSchema = new Schema({
    name: String,
    imagePath: String,
    position: String,
    lengthOfEmployment: String,
    admin: Boolean,
    password: String
},
    { timestamps: {}
})

const Associate = mongoose.model('Associate', AssociateSchema)

module.exports = Associate

