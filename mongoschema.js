/**
 * Created by adam on 5/10/14.
 */

var mongoose = require('mongoose');

var addSchema = mongoose.Schema({  // pulled in from dans app, needs more customization.
    make: String,
    model: String,
    year: Number,
    mileage: Number,
    price: Number,
    title: String,
    description: String
});

var Listing = mongoose.model('adds', addSchema);

//Listing.index({ make: 'text' });  I think this will only work with the mongoose-text-search module
//Listing.index({ model: 'text' });


module.exports = Listing;


//
//title: Sequelize.STRING,
//    make: Sequelize.ENUM('bmw', 'can-am,
//    model: Sequelize.STRING ,
//    year: Sequelize.INTEGER ,
//    mileage: Sequelize.INTEGER,
//    mainimage: Sequelize.BLOB('long'),
//    price: Sequelize.FLOAT,
//    description: Sequelize.TEXT


