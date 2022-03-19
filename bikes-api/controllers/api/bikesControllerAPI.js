const Bike = require('../../models/bike')

// PUBLIC API FOR CRUD OPERATIONS, CLIENT-AGNOSTIC

exports.bikes_list = function(req, res) {
    res.status(200).json({
        bikes: Bike.allBikes,
    })
}

exports.bike_by_id = function(req,res) {
    let bikeId = req.params.id;

    let bike = Bike.findById(bikeId);

    res.status(200).json({
        bike: bike
    })
}

exports.create_bike = function(req,res) {
    // Create new bike with req.body
    const {id, model, color, lat, lon} = req.body;

    if (!id || [model, color, lat, lon].includes(undefined)) {
        return res.status(400).json({
            message: 'Bad Request: bike fields are null or undefined'
        })
    }

    let location = [lat, lon]
    let bike = new Bike(id, color, model, location);
    Bike.add(bike);

    res.status(200).json({
        bike: bike
    });
}


exports.delete_bike = function(req, res) {
    if (!req.body.id) {
        res.status(400).send('Bad Request: Bike id not present in request body')
    }

    Bike.removeById(req.body.id);

    res.status(200).send(`Bike ${req.body.id} was deleted`);
}