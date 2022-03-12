let Bike = class {
    constructor(id, color, model, location) {
        this.id = id
        this.color = color
        this.model = model
        this.location = location
    }

    toString() {
        return `ID: ${this.id} | color: ${this.color}`
    }
}
// Static
Bike.allBikes = []


Bike.add = (aBike) => {
    Bike.allBikes.push(aBike)
}


Bike.findById = (aBikeId) => {
    let aBike = Bike.allBikes.find( x => x.id == aBikeId)
    if(aBike){
        return aBike
    }
    else{
        throw new Error(`Could not find Bike with ID: ${aBikeId}`)
    }
}


Bike.removeById = (aBikeId) => { 
    Bike.allBikes = Bike.allBikes.filter(b => b.id != aBikeId);
}

let b1 = new Bike(1, 'rojo', 'BMX', [-34.6012424,-58.381654])
let b2 = new Bike(2, 'negra', 'ruta', [-33.6012424,-68.381654])

Bike.add(b1)
Bike.add(b2) 

console.log("Bikes", Bike.allBikes);

module.exports = Bike