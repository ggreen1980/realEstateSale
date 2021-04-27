const Property = require('../models/properties');

// CREATE DOCUMENTS ONLY WHEN DATABASE IS EMPTY
Property.countDocuments().then(result => {
    if(result < 1) {
    Property.create(
        {
        location: "111 Main St.",
        imagePath: "/assets/featureHouse1.jpeg",
        thumbnailImagePath: "/assets/featureHouse1-small.jpeg",
        bedrooms: "3",
        baths: "1.5",
        tag: "Great Location",
        rentAmt: "750",
        photoArray: ["/assets/insidePhotoCarousel/bedroom1.jpeg", "/assets/insidePhotoCarousel/dining1.jpeg","/assets/insidePhotoCarousel/famroom1.jpeg"],
        featured: true
        },
        {   
        location: "222 Central Ave.",
        imagePath: "/assets/featureHouse2.jpeg",
        thumbnailImagePath: "/assets/featureHouse2-small.jpeg",
        bedrooms: "4",
        baths: "3.5",
        tag: "Newly Remodeled",
        rentAmt: "900",
        photoArray: ["/assets/insidePhotoCarousel/bedroom2.jpeg", "/assets/insidePhotoCarousel/dining2.jpeg","/assets/insidePhotoCarousel/famroom2.png"],
        featured: true
        },
        {   
        location: "333 BobCat Way",
        imagePath: "/assets/featureHouse3.jpeg",
        thumbnailImagePath: "/assets/featureHouse3-small.jpeg",
        bedrooms: "3",
        baths: "2",
        tag: "Beautiful Large Yard",
        rentAmt: "850",
        photoArray: ["/assets/insidePhotoCarousel/bedroom3.jpeg", "/assets/insidePhotoCarousel/famroom3.jpeg","/assets/insidePhotoCarousel/kitchen1.jpeg"],
        featured: true
        },
        {   
        location: "4542 Freedom Way",
        imagePath: "/assets/featureHouse4.jpeg",
        thumbnailImagePath: "/assets/featureHouse4-small.jpeg",
        bedrooms: "3",
        baths: "2",
        tag: "New Roof",
        rentAmt: "900",
        photoArray: ["/assets/insidePhotoCarousel/bedroom4.jpeg", "/assets/insidePhotoCarousel/famroom4.jpeg","/assets/insidePhotoCarousel/kitchen2.jpeg"],
        featured: true
        },
        {   
        location: "1225 Pine View Ave.",
        imagePath: "/assets/featureHouse5.jpeg",
        thumbnailImagePath: "/assets/featureHouse5-small.jpeg",
        bedrooms: "4",
        baths: "2.5",
        tag: "Charming & Spacious",
        rentAmt: "950",
        photoArray: ["/assets/insidePhotoCarousel/lr4.jpeg", "/assets/insidePhotoCarousel/famroom6.jpeg","/assets/insidePhotoCarousel/kitchen3.jpeg"],
        featured: true
        },
        {   
        location: "5735 Snowy Way.",
        imagePath: "/assets/house6.jpeg",
        thumbnailImagePath: "/assets/house6-small.jpeg",
        bedrooms: "2",
        baths: "1",
        tag: "Great Neighborhood",
        rentAmt: "675",
        photoArray: ["/assets/insidePhotoCarousel/bedroom6.jpeg", "/assets/insidePhotoCarousel/dining5.png","/assets/insidePhotoCarousel/lr1.jpeg"],
        featured: false
        },
        {   
        location: "640 East St.",
        imagePath: "/assets/house7.jpeg",
        thumbnailImagePath: "/assets/house7-small.jpeg",
        bedrooms: "3",
        baths: "2.5",
        tag: "Detached Garage",
        rentAmt: "875",
        photoArray: ["/assets/insidePhotoCarousel/bedroom7.jpeg", "/assets/insidePhotoCarousel/kitchen4.jpeg","/assets/insidePhotoCarousel/lr2.jpeg"],
        featured: false
        },
        {   
        location: "8245 Bear Claw Blvd.",
        imagePath: "/assets/house8.jpeg",
        thumbnailImagePath: "/assets/house8-small.jpeg",
        bedrooms: "2",
        baths: "1",
        tag: "Near Downtown",
        rentAmt: "600",
        photoArray: ["/assets/insidePhotoCarousel/bedroom8.jpeg", "/assets/insidePhotoCarousel/lr3.jpeg","/assets/insidePhotoCarousel/kitchen5.jpeg"],
        featured: false
        },
        {   
        location: "1155 2nd Ave.",
        imagePath: "/assets/house9.jpeg",
        thumbnailImagePath: "/assets/house9-small.jpeg",
        bedrooms: "2",
        baths: "1.5",
        tag: "Recently Remodeled",
        rentAmt: "800",
        photoArray: ["/assets/insidePhotoCarousel/bedroom9.jpeg", "/assets/insidePhotoCarousel/kitchen6.jpeg","/assets/insidePhotoCarousel/lr4.jpeg"],
        featured: false
        },
        {   
        location: "1780 Mountain View.",
        imagePath: "/assets/house10.jpeg",
        thumbnailImagePath: "/assets/house10-small.jpeg",
        bedrooms: "3",
        baths: "2.5",
        tag: "Recently Remodeled",
        rentAmt: "1050",
        photoArray: ["/assets/insidePhotoCarousel/bedroom2.png", "/assets/insidePhotoCarousel/kitchen7.jpeg","/assets/insidePhotoCarousel/lr5.jpeg"],
        featured: false
        },
        {   
        location: "1100 S. 9th St.",
        imagePath: "/assets/house11.jpeg",
        thumbnailImagePath: "/assets/house11-small.jpeg",
        bedrooms: "2",
        baths: "1.5",
        tag: "Cozy",
        rentAmt: "750",
        photoArray: ["/assets/insidePhotoCarousel/bedroom1.jpeg", "/assets/insidePhotoCarousel/interior4.png","/assets/insidePhotoCarousel/famroom5.png"],
        featured: false
        },
        {   
        location: "1295 Pine View Ave.",
        imagePath: "/assets/house12.jpeg",
        thumbnailImagePath: "/assets/house12-small.jpeg",
        bedrooms: "2",
        baths: "1",
        tag: "Country Living",
        rentAmt: "650",
        photoArray: ["/assets/insidePhotoCarousel/bedroom2.jpeg", "/assets/insidePhotoCarousel/lr3.jpeg","/assets/insidePhotoCarousel/dining5.png"],
        featured: false
        }
    )}
})