module.exports.product = function product(a, b) {
    return a * b;
}

module.exports.sum = function sum(a, b) {
    return a + b;
} 

module.exports.substract = function substract(a, b) {
    return this.sum(a,-b);
} 

module.exports.division = function division(a, b) {
    if (b > 0) {
        return a / b;
    }
    else {
        return NaN;
    }
} 


module.exports.power = function power(a, b) {
    return a ** b;
} 

