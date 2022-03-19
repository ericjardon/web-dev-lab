const knex = require('../database/connection');

const TABLE = 'bikes';


let Bike = class {
    constructor(id, color, model, lat, lon) {
        this.id = id
        this.color = color
        this.model = model
        this.lat = lat
        this.lon = lon
    }

    toString() {
        return `ID: ${this.id} | color: ${this.color}`
    }
}

Bike.allBikes = () => {
    return knex
    .select('*')
    .from(TABLE);
}


Bike.add = (aBike) => {
    console.log('insert in mysql')
    return knex(TABLE).insert(aBike);
}


Bike.findById = async (aBikeId) => {
    // let aBike = Bike.allBikes().find( x => x.id == aBikeId)

    let bike = await knex(TABLE).where('id', aBikeId).first();
    if(bike){
        return bike
    }
    else{
        throw new Error(`Could not find Bike with ID: ${aBikeId}`)
    }
}

Bike.updateById = (aBikeId, data) => {
    aBikeId = parseInt(aBikeId);
    return knex(TABLE)
    .where('id', aBikeId)
    .update(data);
} 


Bike.removeById = (aBikeId) => { 
    //Bike.allBikes() = Bike.allBikes().filter(b => b.id != aBikeId);
    return knex(TABLE)
            .where('id', aBikeId)
            .del();
}


module.exports = Bike


/* {
    "id":1,
    "color":"white",
    "model":"velo",
    "lat": 19.2831294747,
    "lon":-99.1251765780
} */