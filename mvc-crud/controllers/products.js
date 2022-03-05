const { default: knex } = require('knex');
const ProductModel = require('../models/Product');


exports.new = (req, res) => {
    // Returns the form for creating a product
    console.log("new product...")
    res.render('products/new');

}

exports.store = (req, res) => {
    console.log('Store product...');

    let product = req.body; // name, price, description

    ProductModel.create(product)
    .then(id => {
        console.log('create prod', id);
        res.redirect('/');
    }).catch(err => {
        console.error('Unsuccesful', err);
        res.redirect('/');
    })
}


exports.detail = (req, res) => {
// Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    ProductModel.find(id).then((product) => {
        // Si el producto no existe entonces
        if (product == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
        }
        // Si el producto existe entonces muestra la vista products/detail.hbs
        // con la información del producto
        res.render('products/detail', {product: product});
    });
}

exports.edit = (req, res) => {
    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    ProductModel.find(id).then((product) => {
      // Si el producto no existe entonces
      if (product == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
      // Si el producto existe entonces muestra la vista products/edit.hbs
      // con la información del producto
      res.render('products/edit', {product: product});
    });
  }


exports.update = (req, res) => {
// Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    ProductModel.find(id).then((product) => {
        // Si el producto no existe entonces
        if (product == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
        }

        // Define los datos del producto actualizado
        let updateProduct = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
        }

        // Actualiza los datos del producto
        ProductModel.update(product.id, updateProduct)
        .then((id) => {
            // Al terminar redirige el índice
            res.redirect('/');
        });
    });
}


exports.delete = (req, res) => {
    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    ProductModel.find(id).then((product) => {
      // Si el producto no existe entonces
      if (product == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
      // Elimina los datos del producto
      ProductModel.delete(product.id)
        .then((id) => {
          // Al terminar redirige el índice
          res.redirect('/');
        });
    });
  }