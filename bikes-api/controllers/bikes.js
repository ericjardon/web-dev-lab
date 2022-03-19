const Bike = require("../models/bike");

exports.bike_list = async (req, res) => {
    let bikes = await Bike.allBikes();
    console.log('bikes result', bikes);
    res.render('bikes/index', {bikes})
}


exports.bike_create_get = (req, res) => {
    res.render('bikes/create');
}

exports.bike_create_post = async (req, res) => {
    const {id, color, model, lat, lon} = req.body;

    let bike = new Bike(id, color, model, lat, lon);
    console.log("bike ", bike, "is of type", typeof bike);
    console.dir(bike);
    // Redirect the user?
    await Bike.add(bike);

    res.redirect('/bikes');
}

exports.bike_update_get = async (req, res) => {
    const {id} = req.params;
    console.log('find by id', id);
    console.log(typeof id);
    let bike = await Bike.findById(id);
    res.render('bikes/update', {bike:bike});
}

exports.bike_update_post = async (req,res) => {
    let {id} = req.params;
    console.log('Updating bike of id', id);
    console.log("req body:", req.body);
    //const {color, model, lat, lon} = req.body;

    await Bike.updateById(id, req.body);

    res.redirect('/bikes');
}

exports.bike_delete_post = async (req, res) => {
    await Bike.removeById(req.params.id);  
    let newBikes = await Bike.allBikes();
    res.render('bikes/index', { bikes: newBikes });
}