const Associates = require('../models/associates');
const Property = require('../models/properties');
const Contact = require('../models/contacts');
const Offices = require('../models/offices');
const Applicant = require('../models/applicants');

module.exports = {
    verifyAdministrator(req, res, next) {
        const adminName = req.body.adminName;
        const adminPassword = req.body.password;
        if (adminName === adminPassword) {
            Associates.findOne({'name': `${adminName}`})
            .then(administrator => {
                context = {
                    id: administrator._id,
                    name: administrator.name,
                    imagePath: administrator.imagePath,
                }
                res.render('admin', context)
            })
            .catch(err => next(err))
        }
    },
    viewProperties(req, res, next) {
        let context;
        Offices.findOne()
        .then(office => {
            context = {
                id: office._id,
                imagePath: office.imagePath
        }
        Property.find()
        .then(properties => {
            context.properties = properties.map(property => {
                return {
                    id: property._id,
                    location: property.location,
                    thumbnailImagePath: property.thumbnailImagePath,
                    bedrooms: property.bedrooms,
                    baths: property.baths,
                    rentAmt: property.rentAmt,
                    featured: property.featured,
                }
            })
            res.render('admin-view-properties', context)
        })
        .catch(err => next(err))
    })
    },
    getAddPropertyForm(req, res, next) {
        Offices.findOne()
        .then(office => {
            context = {
                id: office._id,
                imagePath: office.imagePath
        }
        res.render('add-property', context)
    })
        .catch(err => next(err))
    },
    addPropertyToDB(req, res, next) {
        const propertyProps = req.body;
        Property.create(propertyProps)
        .then(() => res.redirect(303, '/admin-view-properties'))
    },
    populateAddForm(req, res, next) {
        Offices.findOne()
        .then(office => {
            const context = {
                id: office._id,
                imagePath: office.imagePath
        }
        res.render('populate-add-form', context)
    })
        .catch(err => next(err))
    },
    populateApplicationForm(req, res, next) {
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
        res.render('populate-application-form', context)
    })
        .catch(err => next(err))
    },
    populateAdminForm(req, res, next) {
        Offices.findOne()
        .then(office => {
            const context = {
                id: office._id,
                imagePath: office.imagePath
        }
        res.render('populate-admin-form', context)
    })
        .catch(err => next(err))
    },
    viewContacts(req, res, next) {
        let context;
        Offices.findOne()
        .then(office => {
            context = {
                id: office._id,
                imagePath: office.imagePath
        }
        Contact.find()
        .then(contacts => {
            context.contacts = contacts.map(contact => {
                return {
                    id: contact._id,
                    firstName: contact.firstName,
                    lastName: contact.lastName,
                    email: contact.email,
                    phone: contact.phone,
                    comments: contact.comments,
                }
            })
            res.render('admin-view-contacts', context)
        })
        .catch(err => next(err))
    })
    },
    viewApplications(req, res, next) {
        let context;
        Offices.findOne()
        .then(office => {
            context = {
                id: office._id,
                imagePath: office.imagePath
        }
        Applicant.find()
        .then(applicants => {
            context.applicants = applicants.map(applicant => {
                return {
                    id: applicant._id,
                    propertyAppliedFor: applicant.propertyAppliedFor,
                    firstName: applicant.firstName,
                    lastName: applicant.lastName,
                    dob: applicant.dob,
                    ssn: applicant.ssn,
                    driversLicense: applicant.driversLicense,
                    maritalStatus: applicant.maritalStatus,
                    spouseName: applicant.spouseName,
                    spouseDOB: applicant.spouseDOB,
                    spouseSSN: applicant.spouseSSN,
                    spouseDrivers: applicant.spouseDrivers,
                    desiredMoveIn: applicant.desiredMoveIn,
                    occupantNumber: applicant.occupantNumber,
                    occupantOne: applicant.occupantOne,
                    occupantTwo: applicant.occupantTwo,
                    occupantThree: applicant.occupantThree,
                    occupantFour: applicant.occupantFour,
                    presentAddress: applicant.presentAddress,
                    presentCity: applicant.presentCity,
                    presentState: applicant.presentState,
                    presentZip: applicant.presentZip,
                    presentYears: applicant.presentYears,
                    presentLandlord: applicant.presentLandlord,
                    presentLandlordCity: applicant.presentLandlordCity,
                    presentLandlordState: applicant.presentLandlordState,
                    presentLandlordZip: applicant.presentLandlordZip,
                    presentLandlordPhone: applicant.presentLandlordPhone,
                    previousAddress: applicant.previousAddress,
                    previousAddressCity: applicant.previousAddressCity,
                    previousAddressState: applicant.previousAddressState,
                    previousAddressZip: applicant.previousAddressZip,
                    previousAddressYears: applicant.previousAddressYears,
                    previousLandlord: applicant.previousLandlord,
                    previousLandlordCity: applicant.previousLandlordCity,
                    previousLandlordState: applicant.previousLandlordState,
                    previousLandlordZip: applicant.previousLandlordZip,
                    previousLandlordPhone: applicant.previousLandlordPhone,
                    presentEmployer: applicant.presentEmployer,
                    presentSupervisor: applicant.presentSupervisor,
                    presentPosition: applicant.presentPosition,
                    presentSalary: applicant.presentSalary,
                    presentEmploymentYears: applicant.presentEmploymentYears,
                    previousEmployer: applicant.previousEmployer,
                    previousSupervisor: applicant.previousSupervisor,
                    previousPosition: applicant.previousPosition,
                    previousSalary: applicant.previousSalary,
                    previousEmploymentYears: applicant.previousEmploymentYears,
                }
            })
            res.render('admin-view-applications', context)
        })
        .catch(err => next(err))
    })
    },
    deleteApplicant(req, res, next) {
        const applicationId = req.params.applicationId;
        const propertyId = req.params.propertyId;
        Property.findByIdAndUpdate(propertyId, {$pull: {applicants: applicationId}}, {new: true})
        .then(() => {
            Applicant.findById(applicationId)
            .then(() => {
                Applicant.deleteOne({_id: applicationId})
                .then(() => res.redirect(303, '/admin-view-applications'))
            })
            .catch(err => next(err))
        })
      },
    deleteContact(req, res, next) {
        const contactId = req.params.contactId;
        Contact.findById(contactId)
        .then(() => {
            Contact.deleteOne({_id: contactId})
            .then(() => res.redirect(303, '/admin-view-contacts'))
        })
        .catch(err => next(err))
      },
    getUpdateProperty(req, res, next) {
        let context;
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
                rentAmt: property.rentAmt,
                featured: property.featured
            }
            Property.findById(propertyId)
            .then(propertyTwo => {
                context.propertyTwo = propertyTwo.photoArray.map(photo => photo)        
                context.insideOne = propertyTwo.photoArray[0],
                context.insideTwo = propertyTwo.photoArray[1],
                context.insideThree = propertyTwo.photoArray[2],
                res.render('update-property-form', context)
            })
        })
        .catch(err => next(err))
    },
    updateProperty(req, res, next) {
        const propertyId = req.params.propertyId;
        const newLocation = req.body.location;
        const newImagePath = req.body.imagePath;
        const newThumbNailImagePath = req.body.thumbnailImagePath;
        const newPhotoArrayOne = req.body.photoArrayOne;
        const newPhotoArrayTwo = req.body.photoArrayTwo;
        const newPhotoArrayThree = req.body.photoArrayThree;
        const newBedrooms = req.body.bedrooms;
        const newBaths = req.body.baths;
        const newTag = req.body.tag;
        const newRentAmt = req.body.rentAmt;
        const newFeatured = req.body.featured;

        Property.findByIdAndUpdate(propertyId, 
            {$set: {
            location: newLocation, 
            imagePath: newImagePath,
            thumbnailImagePath: newThumbNailImagePath,
            photoArray: [newPhotoArrayOne, newPhotoArrayTwo, newPhotoArrayThree],
            bedrooms: newBedrooms,
            baths: newBaths,
            tag: newTag,
            rentAmt: newRentAmt,
            featured: newFeatured
            }})
            .then(() => {
                res.redirect(303, `/admin-view-properties`)
            })
    },
      deleteProperty(req, res, next) {
          const propertyId = req.params.propertyId;
          Property.findById({_id: propertyId})
          .then(() => {
              Property.deleteOne({_id: propertyId})
              .then(() => res.redirect(303, '/admin-view-properties'))
          })
          .catch(err => next(err))
      }
}