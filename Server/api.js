var mongoschema = require('./mongoschema');



exports.seeAdds = function(req, res){

    Listing.find()

        .exec(function(err, posts) {
            // res.sendfile('../app' + '/index.html');
            res.sendfile(path, {'moto-app' + '/app/index.html'});
        });

}

// exports.seeAdds = function(req, res){

//     Listing.find()

//         .exec(function(err, posts) {
//             res.send(posts);
//         });

// }



exports.postAdd = function(req, res) {
    var addinfo = {
        title: req.body.title,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        mileage: req.body.mileage,
        mainimage: req.body.mainimage,
        price: req.body.price,
        description: req.body.description

    }
    var newAdd = new Listing(addinfo)
    console.log(newAdd);
        newAdd.save(function(err){
        if (err) return console.error(err)

        res.json(newAdd);
    })



}
