const { Router } = require('express');
const DestinoController = require('../controllers/destinoController');

const destinoController = new DestinoController();

const router =  Router();

router.get('/destinos', (req, res) => destinoController.getAll(req, res))

router.post('/destinos/', (req, res) => destinoController.save(req, res))

router.get('/destinos/:id', (req, res)=> destinoController.getById(req, res))

router.put('/destinos/:id', (req, res) => destinoController.update(req, res))

router.delete('/destinos/:id', (req, res) => destinoController.delete(req, res))

module.exports = router;