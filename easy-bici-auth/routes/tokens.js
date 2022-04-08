const express = require('express')
const router = express.Router()
let tokensController = require('../controllers/tokens')


router.get('/confirmation/:token', tokensController.confirmationGet);

module.exports = router;