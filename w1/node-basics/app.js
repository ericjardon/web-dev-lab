//require('')


function greet() {
    const d = new Date();
    console.log('Hola! son las: ' + d.getHours());
}


module.exports.greet = greet;