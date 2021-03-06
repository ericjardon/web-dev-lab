const express = require('express');
const router = express.Router();
const bikeController = require('../controllers/bikes');

// Functions can be asynchronous
router.get('/', bikeController.bike_list)
router.get('/create', bikeController.bike_create_get)
router.post('/create', bikeController.bike_create_post)
router.get('/:id/update', bikeController.bike_update_get)
router.post('/:id/update', bikeController.bike_update_post)
router.post('/:id/delete', bikeController.bike_delete_post)


module.exports = router;