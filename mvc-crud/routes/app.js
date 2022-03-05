const { Router } = require('express');
const PagesController = require('../controllers/pages');
const ProductsController = require('../controllers/products');
let router = require('express').Router();

router.get('/', PagesController.homepage);

router.get('/about', PagesController.about);
router.get('/products/new', ProductsController.new);
router.get('/products/edit/:id', ProductsController.edit);
router.get('/products/:id', ProductsController.detail);

// Almacena el producto
router.post('/products', ProductsController.store);
router.put('/products/:id', ProductsController.update);
router.delete('/products/:id', ProductsController.delete);

module.exports = router;