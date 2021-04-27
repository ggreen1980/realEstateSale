const Office = require('../models/offices');

// CREATE DOCUMENTS ONLY WHEN DATABASE IS EMPTY
Office.countDocuments().then(result => {
    if(result < 1) {
    Office.create(
        {
        name: "Main Office",
        imagePath: "/assets/office.jpeg",
        }
    )}
})