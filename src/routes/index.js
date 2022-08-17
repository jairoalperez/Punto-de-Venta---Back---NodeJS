const {Router, application} = require('express')
const router = Router()

const { getProducto, postProducto, getVenta, postVenta, getVentaPP, getServMasVen, getCliMasCom} = require('../controllers/index.controller')

router.get('/mostrar-producto', getProducto)
router.post('/registrar-producto', postProducto)

router.get('/mostrar-venta', getVenta)
router.post('/registrar-venta', postVenta)

router.get('/mostrar-venta/:np', getVentaPP)

router.get('/mostrar-servmasven', getServMasVen)
router.get('/mostrar-climascom', getCliMasCom)



module.exports = router