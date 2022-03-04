// Express framework will find the views files without having to specify the extension
const ProductModel = require('../models/Product');

exports.homepage = (req, res) => {
    //res.send('Hello from homepage');
    ProductModel.all()  // fetches all products from knex connection
    .then( data => {
        let products = data;

        res.render('pages/homepage', {products:products});
    }).catch(err=> {
        console.error(err);
        res.status(500).send('Error fetching products');
    })

}


exports.about = (req, res) => {
    //res.send('Hello from about');
    res.render('pages/about');
}