const { Router } = require('express');
const AtrativoController = require('../controllers/atrativosController')

const atrativosController = new  AtrativoController();

const router = Router();

router.get('/atrativos', (req, res) => atrativosController.getAll(req, res));

router.post('/atrativos/', (req, res)=> atrativosController.save(req, res));

router.get('/atrativos/:id', (req, res)=> atrativosController.getById(req, res));

router.put('/atrativos/:id', (req, res) => atrativosController.update(req, res));

router.delete('/atrativos/:id', (req, res) => atrativosController.delete(req, res));

module.exports = router;