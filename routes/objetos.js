const express = require('express');
const router = express.Router();

const objetosController = require('../controllers/objetosController');

router.get('/', objetosController.obtenerTodos);

router.get('/filtrar', objetosController.filtrarPorTipo);

router.get('/:id', objetosController.obtenerPorId);

router.post('/', objetosController.crear);

router.put('/:id', objetosController.actualizar);

router.delete('/:id', objetosController.eliminar);

module.exports = router;