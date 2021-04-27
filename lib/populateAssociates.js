const Associate = require('../models/associates');

// CREATE DOCUMENTS ONLY WHEN DATABASE IS EMPTY
Associate.countDocuments().then(result => {
    if(result < 1) {
    Associate.create(
        {
        name: "Anne",
        imagePath: "/assets/anne.jpeg",
        position: "Property Manager",
        lengthOfEmployment: "3 years",
        admin: true,
        password: "Anne"
        },
        {   
        name: "Amber",
        imagePath: "/assets/amber.jpeg",
        position: "Property Manager",
        lengthOfEmployment: "5 years",
        admin: true,
        password: "Amber"
        },
        {   
        name: "Greg",
        imagePath: "/assets/greg.jpeg",
        position: "Property Manager",
        lengthOfEmployment: "2 years",
        admin: true,
        password: "Greg"
        },
        {
        name: "Steve",
        imagePath: "/assets/steve.jpeg",
        position: "Property Manager",
        lengthOfEmployment: "2 years",
        admin: true,
        password: "Steve"
        },
        {
        name: "Andrew",
        imagePath: "/assets/andrew.jpeg",
        position: "Property Manager",
        lengthOfEmployment: "4 years",
        admin: true,
        password: "Andrew"
        }
    )}
})