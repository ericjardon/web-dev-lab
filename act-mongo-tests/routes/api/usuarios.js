var express = require('express');
var router = express.Router();
let usuarioController = require('../../controllers/api/usuarioControllerAPI')

//Listar de usuarios
router.get('/', usuarioController.usuarios_list);

//Crear usuario
router.post('/create', usuarioController.usuarios_create);

//Reservar
router.post('/reservar', usuarioController.usuario_reservar)

// Borrar reserva
router.post('/reserva/eliminar/:id', usuarioController.delete_reserva)

module.exports = router;

