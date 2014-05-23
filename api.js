var Listing = require('./mongoschema');



exports.seeAdds = function(req, res){

//    res.json([{title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"},
//        {title: "cool bike",make:"honda" ,model:"shadow" ,price:200 ,description: "this is a description"}]);
//    console.log(Listing.find({make: "honda"}));
    Listing.find()

        .exec(function(err, listings) {
            console.log("the query returned: ", listings);
            res.send(200, listings);
        });

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

    }
    var newAdd = new Listing(addInfo)
    console.log(newAdd);
        newAdd.save(function(err){
        if (err) return console.error(err)

        res.json(newAdd);
    })



}
