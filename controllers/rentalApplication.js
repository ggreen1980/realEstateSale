const Property = require('../models/properties');
const Applicant = require('../models/applicants');

module.exports = {
    getApplicationPage(req, res, next) {
        const propertyId = req.params.propertyId
        Property.findById(propertyId)
        .then(property => {
            context = {
                id: property._id,
                location: property.location,
                imagePath: property.imagePath,
                thumbnailImagePath: property.thumbnailImagePath,
                bedrooms: property.bedrooms,
                baths: property.baths,
                tag: property.tag,
                rentAmt: property.rentAmt
            }
        res.render('application', context)
        })
    },
    postApplicationForm(req, res, next) {
        const propertyId = req.params.propertyId;
        const applicationInfo = req.body;
        Applicant.create(applicationInfo)
        .then((applicant) => res.redirect(303, `/applicantInfo/${applicant._id}/propertyId/${propertyId}`))
        .catch(err => next(err));
    },
    // update applied for property puts applicant id in property schema as a reference
    updateAppliedForProperty(req, res, next) {
        const applicantId = req.params.applicantId;
        const propertyId = req.params.propertyId;
        Property.findByIdAndUpdate(propertyId, { $addToSet: { applicants: applicantId } }, { new: true })
        .then(() => {
        Applicant.findByIdAndUpdate(applicantId, { $addToSet: { propertyAppliedFor: propertyId } }, { new: true })
            .then(() => {
                res.redirect(303, `/thanks-message/applicantId/${applicantId}/propertyId/${propertyId}`)
            })
        })
            .catch(err => next(err))
    },
    thanksMessage(req, res, next) {
        const applicantId = req.params.applicantId;
        const propertyId = req.params.propertyId;
        let context;
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
            Applicant.findById(applicantId)
            .then(applicant => {
                let split = applicant._id.toString().split('')
                let lastFive = split.slice(-5);
                lastFive = lastFive.join('');
                context.applicant = {
                    id: lastFive,
                    firstName: applicant.firstName
                }     
                res.render('application-details', context)
            })
        })    
    },
    deleteApplication(req, res, next) {
        const applicantId = req.params.applicantId;
        const propertyId = req.params.propertyId;
        Applicant.findById(applicantId)
        .then(() => {
            Applicant.deleteOne({_id: applicantId})
            .then((applicantId) => {
                Property.findByIdAndUpdate(propertyId, {$pull: {applicants: applicantId}}, {new: true})
                .then(() => {
                    res.redirect(303, `/`)
              })
            })
        })
        .catch(err => next(err))
    }
}








 