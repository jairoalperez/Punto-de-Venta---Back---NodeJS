const {Router, application} = require('express')
const router = Router()

const { getProducto, postProducto } = require('../controllers/index.controller')

router.get('/mostrar-producto', getProducto)

router.post('/registrar-producto', postProducto)

module.exports = router