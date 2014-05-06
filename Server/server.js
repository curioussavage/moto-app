var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.send('hello world');
});


app.get('/listings', function(req, res){
    var listings = [];

    listings = [{"id": 1, "title": "the best listing ever"},{"id":2, "title":"cool cat listing"}]
    res.json(listings);

});

app.post('/listing', function(req, res) {
    var newPost = {
        id: null,
        title: req.body.title,
        price: req.body.price,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        mileage: req.body.mileage
    }

    console.log(newMention)
    mentions.push(newMention);
    res.json(newMention);
});





app.listen(3000);


