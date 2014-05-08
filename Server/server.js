var express = require('express');
var app = express();
bodyParser = require('body-parser')


app.use(bodyParser());

// import sequelize and connect to the database
var Sequelize = require('Sequelize');

sequelize = new Sequelize('motodatabase', 'root', null, {   ///  update here with the database for the app.
    host : 'localhost'
});


sequelize.authenticate().complete(function(err){
    if (!!err) {
        console.log('unable to connect to the database:', err)
    } else {
        console.log('Connection established.')
    }
});

//    setting up the adds table   /////////////////

var Add = sequelize.define('Add', {     ///  update the fields here with the appropriate ones for
    title: Sequelize.STRING,
    make: Sequelize.ENUM('bmw', 'can-am', 'ducati', 'harley', 'davidson', 'honda', 'ktm', 'kawasaki', 'suzuki', 'triumph', 'victory', 'yamaha', 'indian', 'moto guzzi', 'vespa', 'aprilia', 'hyosung', 'cleveland cycle works'),
    model: Sequelize.STRING ,
    year: Sequelize.INTEGER ,
    mileage: Sequelize.INTEGER,
    mainimage: Sequelize.BLOB('long'),
    price: Sequelize.FLOAT,
    description: Sequelize.TEXT

});

sequelize.sync();

///////// handle requests //////////////

app.get('/', function(req, res ){

    Add.all().success(function(adds) {
        // lawyers will be an array of all Lawyer instances


        res.json(adds);
    })

});



app.post('/listing', function(req, res) {
    var newadd = {
        title: req.body.title,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        mileage: req.body.mileage,
        mainimage: req.body.mainimage,
        price: req.body.price,
        description: req.body.description

    }
    console.log(newadd);
var add = Add.build(newadd).save();


    res.json(newadd);
});





app.listen(3000);


