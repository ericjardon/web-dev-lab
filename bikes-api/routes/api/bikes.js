const express = require('express');
const router = express.Router();
const bikesController = require('../../controllers/api/bikesControllerAPI');

// API read all
router.get('/', bikesController.bikes_list);

// API read one
router.get('/:id', bikesController.bike_by_id);

// API create
router.post('/create', bikesController.create_bike);

// API Delete
router.post('/delete', bikesController.delete_bike);

module.exports = router;