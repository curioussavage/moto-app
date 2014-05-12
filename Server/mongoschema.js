/**
 * Created by adam on 5/10/14.
 */

var mongoose = require('mongoose');

var addSchema = mongoose.Schema({  // pulled in from dans app, needs more customization.
    make: String,
    model : String,
    year: Number,
    mileage: Number,
    price: Number,
    description: Number
});

Listing = mongoose.model('Adds' , addSchema);

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