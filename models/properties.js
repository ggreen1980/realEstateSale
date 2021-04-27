const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PropertySchema = new Schema({
    applicants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Applicant'}],
    location: String,
    imagePath: String,
    thumbnailImagePath: String,
    bedrooms: String,
    baths: String,
    tag: String,
    rentAmt: String,
    photoArray: Array,
    featured: {type:Boolean, default: true}
},
    { timestamps: {}
})

const Property = mongoose.model('Property', PropertySchema)

module.exports = Property

// 