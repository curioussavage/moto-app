var express = require('express');

var mongoose = require('mongoose');

var api = require('./api');

bodyParser = require('body-parser');


// start up express app
var app = express();

app.use(bodyParser());



// Enables CORS

var enableCORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};


// enable CORS!
app.use(enableCORS);


// Connect to Mongolab


mongoose.connect('mongodb://appserver:peru0709@ds033477.mongolab.com:33477/motodatabase');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
     console.log("connected to motodatabase at mongolab.com... :)")
});



///////// handle requests //////////////

app.get('/', api.seeAdds);



app.post('/listing', api.postAdd );





app.listen(3000);


