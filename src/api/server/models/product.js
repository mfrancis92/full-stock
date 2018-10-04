var mongoose = require('mongoose');

var Product = mongoose.model('Product', {
    title: {
        type: String
    },
    type: {
        type: String
    },
    brand: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
});

module.exports = {Product};