const { Router } = require('express');
const PagesController = require('../controllers/pages');
let router = require('express').Router();

router.get('/', PagesController.homepage);

router.get('/about', PagesController.about);


module.exports = router;