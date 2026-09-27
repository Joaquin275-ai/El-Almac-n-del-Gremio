const express = require('express');
const router = express.Router();

const hechizosController = require('../controllers/hechizosController');

router.get('/', hechizosController.obtenerTodos);

router.get('/filtrar', hechizosController.filtrarPorEscuela);

router.get('/:id', hechizosController.obtenerPorId);

router.post('/', hechizosController.crear);

router.put('/:id', hechizosController.actualizar);

router.delete('/:id', hechizosController.eliminar);

module.exports = router;