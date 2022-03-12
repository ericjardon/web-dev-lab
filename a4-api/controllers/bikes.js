const Bike = require("../models/bike");

exports.bike_list = (req, res) => {
    res.render('bikes/index', {bikes: Bike.allBikes})
}


exports.bike_create_get = (req, res) => {
    res.render('bikes/create' );
}

exports.bike_create_post = (req, res) => {
    const {id, color, model, lat, lon} = req.body;

    let bike = new Bike(id, color, model, [lat,lon]);

    // Redirect the user?
    Bike.add(bike);

    res.redirect('/bikes')
}

exports.bike_update_get = (req, res) => {
    const {id} = req.params;
    console.log('find by id', id);
    console.log(typeof id);
    let bike = Bike.findById(id);
    res.render('bikes/update', {bike:bike});
}

exports.bike_update_post = (req,res) => {
    console.log('Updating bike', req.body);

    const {id, color, model, lat, lon} = req.body;

    let bike = Bike.findById(id);

    bike.id = id;
    bike.color = color;
    bike.model = model;
    bike.location  = [lat, lon];

    res.redirect('/bikes');
}

exports.bike_delete_post = (req, res) => {
    Bike.removeById(req.params.id);  
    res.render('bikes/index', {bikes: Bike.allBikes});
}