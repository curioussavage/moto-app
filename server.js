var express = require('express');

var mongoose = require('mongoose');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

var api = require('./api');

bodyParser = require('body-parser');


    // define the passport strategies  //

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));


// start up express app

var app = express();

// Define a middleware function to be used for every secured routes

var auth = function(req, res, next){
    if (!req.isAuthenticated()) res.send(401);
    else next();
};

   // for admin
//app.get('/users', auth, user.list);

// route to log in //

app.post('/login', passport.authenticate('local'), function(req, res) {
    res.send(req.user);
});

// route to log out
 app.post('/logout', function(req, res){
     req.logOut(); res.send(200);
 });

// serve static files
app.use(express.static( __dirname + '/app'));

// body parser, is it ever not necessary?
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
     console.log("connected to motodatabase at mongolab.com... ")
});



///////// handle requests //////////////


app.get('/search', api.seeAdds);
app.post('/search', api.searchAdds);

app.post('/listing', api.postAdd );





app.listen(9001);


