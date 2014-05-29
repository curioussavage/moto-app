var Listing = require('./mongoschema');



exports.seeAdds = function(req, res){

//    res.json([{title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"},
//        {title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"}]);
//    console.log(Listing.find({make: "honda"}));
    Listing.find()

        .exec(function(err, listings) {

            res.send(200, listings);
        });

}

exports.searchAdds = function (req, res) {
    var searchParams = {
        keywords : req.body.keywords,
        lowPrice : req.body.lowPrice,
        highPrice :  req.body.highPrice,

        make : req.body.make,
        model : req.body.model,
        mileage : req.body.mileage
    }

       if (!searchParams.highPrice) {searchParams.highPrice = 100000;}
       if (!searchParams.lowPrice) {searchParams.lowPrice = 0;}
       if (!searchParams.make) {searchParams.make = " ";}
       if (!searchParams.model) {searchParams.model = " ";}
       if (!searchParams.mileage) {searchParams.mileage = 100000;}

       if (searchParams.keywords) {searchParams.keywords = searchParams.keywords.split(" ");} else {searchParams.keywords = " "}

    Listing.find()
        .where('title' || 'description').in(searchParams.keywords)
        .where('price').gte(searchParams.lowPrice)
        .where('price').lte(searchParams.highPrice)
        .where('make').in(searchParams.make)
        .where('model').in(searchParams.model)
        .where('mileage').lte(searchParams.mileage)
        .exec(function(err, result){
            if (err) {console.log(err)}
            console.log(result)
            res.send(result);

        })
}


exports.postAdd = function(req, res) {
    var addInfo = {
        title: req.body.title,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        mileage: req.body.mileage,
        price: req.body.price,
        description: req.body.description

    };
    var newAdd = new Listing(addInfo)
    console.log(newAdd);
        newAdd.save(function(err){
        if (err) return console.error(err)

        res.json(newAdd);
    })




}
