const adminController = require('../controllers/admin');
const rentalApplicationController = require('../controllers/rentalApplication');
const propertyController = require('../controllers/property');
const navigationController = require('../controllers/navigation');
const contactController = require('../controllers/contact');


// EXPORT APP ROUTING
module.exports = (app) => {

    // LANDING PAGE
    app.get('/', propertyController.getFirstProperty)


    // NAVIGATION
    app.get('/associates', navigationController.getAssociates)
    app.get('/careers', navigationController.getCareersPage)
    app.get('/services', navigationController.getServicesPage)
    app.get('/mission', navigationController.getMissionPage)
    app.get('/about', navigationController.getAboutPage)
    app.get('/admin', navigationController.getLoginPage)
    app.get('/contact', navigationController.getContactPage)
    

    // RENTAL APPLICATION CONTROLLERS
    app.get('/apply/:propertyId', rentalApplicationController.getApplicationPage)
    app.post('/rental-application/:propertyId', rentalApplicationController.postApplicationForm)
    //update applied for property sets application id as a reference in property schema
    app.get('/applicantInfo/:applicantId/propertyId/:propertyId', rentalApplicationController.updateAppliedForProperty)
    //give thanks msg to user upon submitting application
    app.get('/thanks-message/applicantId/:applicantId/propertyId/:propertyId', rentalApplicationController.thanksMessage)
    app.get('/delete-application/propertyId/:propertyId/applicantId/:applicantId', rentalApplicationController.deleteApplication)
    
    // PROPERTY DETAILS HANDLERS
    app.get('/details/:propertyId', propertyController.getPropertyDetails)
    

    //CONTACTS HANDLERS
    app.post('/contact-form', contactController.postContact)
    app.get('/contact/contactId/:contactId', contactController.getThanksMessage)
     
    // ADMIN CONTROLLERS
    app.post('/admin/login', adminController.verifyAdministrator)
    app.get('/add-property', adminController.getAddPropertyForm)
    app.post('/add-new-property', adminController.addPropertyToDB)
    app.get('/admin-view-properties', adminController.viewProperties)
    app.get('/admin-view-contacts', adminController.viewContacts)
    app.get('/admin-view-applications', adminController.viewApplications)
    app.get('/admin-delete-contact/:contactId', adminController.deleteContact)
    app.get('/admin-delete-application/propertyId/:propertyId/applicant/:applicationId', adminController.deleteApplicant)
    app.get('/admin-delete-property/propertyId/:propertyId', adminController.deleteProperty)
    app.post('/admin-update-property/propertyId/:propertyId', adminController.updateProperty)
    app.get('/admin-update-property/propertyId/:propertyId', adminController.getUpdateProperty)
    // auto populate fields
    app.get('/populate-add-form', adminController.populateAddForm)
    app.get('/populate-application-form/:propertyId', adminController.populateApplicationForm)
    app.get('/populate-admin-form', adminController.populateAdminForm)


    
    // ERROR HANDLERS
    app.use((err, req, res, next) => {
        res.status(404)
        res.render('404', {layout: 'error'})
    })
}