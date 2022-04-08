const express = require('express')
const router = express.Router()
let usuariosController = require('../controllers/usuarios')

router.get('/', usuariosController.list)

router.get('/create', usuariosController.create_GET)
router.post('/create', usuariosController.create)

router.get('/:id/update', usuariosController.update_GET)
router.post('/:id/update', usuariosController.update)

router.post('/:id/delete', usuariosController.delete)

module.exports = router;