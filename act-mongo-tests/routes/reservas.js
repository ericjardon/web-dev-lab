let express = require('express');
let router = express.Router();
let usuariosAPI = require('../controllers/api/usuarioControllerAPI')
let bicicletas = require('../controllers/bicicleta')
let reservasController = require('../controllers/reservas')

router.post('/create', usuariosAPI.usuario_reservar)
router.get('/create', bicicletas.fetchBicicletas, reservasController.create_get)
router.post('/delete/:id', reservasController.delete)

module.exports = router;