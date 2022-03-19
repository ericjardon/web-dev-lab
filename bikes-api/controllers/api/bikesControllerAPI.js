const Bike = require('../../models/bike')

// PUBLIC API FOR CRUD OPERATIONS, CLIENT-AGNOSTIC

exports.bikes_list = async function(req, res) {
    
    let bikes = await Bike.allBikes();
    res.status(200).json({
        bikes: bikes
    })
}

exports.bike_by_id = function(req,res) {
    let bikeId = req.params.id;

    let bike = Bike.findById(bikeId);

    res.status(200).json({
        bike: bike
    })
}

exports.create_bike = async function(req,res) {
    // Create new bike with req.body
    const {id, model, color, lat, lon} = req.body;

    if (!id || [model, color, lat, lon].includes(undefined)) {
        return res.status(400).json({
            message: 'Bad Request: bike fields are null or undefined'
        })
    }

    let bike = new Bike(id, color, model, lat, lon);
    await Bike.add(bike);

    res.status(200).json({
        bike: bike
    });
}


exports.delete_bike = async function(req, res) {
    await Bike.removeById(req.params.id);  
    res.status(200).send(`Bike ${req.body.id} was deleted`);
}

exports.update_bike = async function(req, res) {
    // api/bikes/:id/update
    let {id} = req.params;
    console.log('Updating bike of id', id);
    console.log("req body:", req.body);

    await Bike.updateById(id, req.body);

    res.status(200).send(`Updated bike with id ${id}`)
}