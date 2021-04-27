const Associates = require('../models/associates');
const Property = require('../models/properties');
const Offices = require('../models/offices');

module.exports = {
    getAssociates(req, res, next) {
        let context;
        Property.findOne()
        .then(property => {
            context = {
                id: property._id,
                imagePathOne: property.imagePath
        }
        Associates.find()
        .then(associates => {
            context.associates = associates.map(associate => {
                    return {
                        id: associate._id,
                        name: associate.name,
                        imagePath: associate.imagePath,
                        position: associate.position,
                        lengthOfEmployment: associate.lengthOfEmployment
                    }
                })
                res.render('associates', context)
            })
        })
        .catch(err => next(err))
    },
    getCareersPage(req, res, next) {
        Offices.findOne()
            .then(office => {
                context = {
                    id: office._id,
                    imagePath: office.imagePath
            }
            res.render('careers', context)
        })
        .catch(err => next(err))
    },
    getServicesPage(req, res, next) {
        Offices.findOne()
            .then(office => {
                context = {
                    id: office._id,
                    imagePath: office.imagePath
            }
            res.render('services', context)
        })
        .catch(err => next(err))
    },
    getMissionPage(req, res, next) {
        Offices.findOne()
            .then(office => {
                context = {
                    id: office._id,
                    imagePath: office.imagePath
            }
            res.render('mission', context)
        })
        .catch(err => next(err))
    },
    getAboutPage(req, res, next) {
        Offices.findOne()
        .then(office => {
            context = {
                id: office._id,
                imagePath: office.imagePath
        }
        res.render('about', context)
    })
    .catch(err => next(err))
    }, 
    getContactPage(req, res, next) {
        Offices.findOne()
        .then(office => {
            context = {
                id: office._id,
                imagePath: office.imagePath
        }
        res.render('contact', context)
    })
    .catch(err => next(err))
    }, 
    getLoginPage(req, res, next) {
        Offices.findOne()
        .then(office => {
            context = {
                id: office._id,
                imagePath: office.imagePath
        }
        res.render('login', context)
    })
    .catch(err => next(err))
    }
}