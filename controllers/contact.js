const Contact = require('../models/contacts');
const Offices = require('../models/offices');

module.exports = {
    postContact(req, res, next) {
        const contactProps = req.body;
        Contact.create(contactProps)
        .then((contact) => res.redirect(303, `/contact/contactId/${contact._id}`))
        .catch(err => next(err));
    },
    getThanksMessage(req, res, next) {
        const contactId = req.params.contactId;
        let context;
        Offices.findOne()
        .then(office => {
            context = {
                id: office._id,
                imagePath: office.imagePath
        }
        Contact.findById(contactId)
            .then(contact => {
                context.contact = {
                    firstName: contact.firstName
                }     
                res.render('contact-thanks', context)
            })
            .catch(err => next(err))
        })
    },
}


