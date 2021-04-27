const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ContactSchema = new Schema({
    firstName: String,
    initial: String,
    lastName: String,
    email: String,
    phone: String,
    comments: String,
},
    {timestamps: {}}
);

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact

