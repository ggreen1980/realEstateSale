const Property = require('../models/properties');

module.exports = {
    getFirstProperty(req, res, next) {
    let context;
    Property.findOne()
    .then(property => {
        context = {
            id: property._id,
            location: property.location,
            imagePath: property.imagePath,
            thumbnailImagePath: property.thumbnailImagePath,
            bedrooms: property.bedrooms,
            baths: property.baths,
            tag: property.tag,
            rentAmt: property.rentAmt,
            featured: property.featured
        }
        Property.find()
            .then(properties => {
                context.properties = properties.map(property => {
                    return {
                        id: property._id,
                        location: property.location,
                        imagePath: property.imagePath,
                        thumbnailImagePath: property.thumbnailImagePath,
                        bedrooms: property.bedrooms,
                        baths: property.baths,
                        tag: property.tag,
                        rentAmt: property.rentAmt,
                        featured: property.featured
                    }
                })
               context.properties.shift()
                res.render('home', context)
            })
        })
        .catch(next)
    },
    getPropertyDetails(req, res, next) {
        let context;
        const propertyId = req.params.propertyId
        Property.findById(propertyId)
        .then(property => {
            context = {
                id: property._id,
                imagePath: property.imagePath,
                location: property.location,
                bedrooms: property.bedrooms,
                baths: property.baths,
                tag: property.tag,
                photoArray: property.photoArray[0]
            }
            Property.findById(propertyId)
            .then(propertyTwo => {
                context.propertyTwo = propertyTwo.photoArray.map(photo => photo)        
                context.propertyTwo.shift()
                res.render('property-details', context)
            })
        })
    }
}