var express = require('express');
// modulo de rutas
var router = express.Router(); // modulo ruteador
var bicicletaController = require('../controllers/bicicleta');

// rutas de navegacion
router.get('/', bicicletaController.bicicleta_list);
router.get('/create', bicicletaController.bicicleta_create_get);
router.post('/create', bicicletaController.bicicleta_create_post);
router.get('/:id/update', bicicletaController.bicicleta_update_get);
router.post('/:id/update', bicicletaController.bicicleta_update_post);
router.post('/:id/delete', bicicletaController.bicicleta_delete_post);
router.get('/:id/watch', bicicletaController.bicicleta_watch_get);
//busca por parametro para los CRUD.
module.exports = router;

 