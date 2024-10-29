const express = require('express');
const receitaController = require('../controllers/ReceitaController');
const router = express.Router();

//Rota para criar uma receita
router.post('/receitas', receitaController.createReceita);

//Rota para listar todas as receitas
router.get('/receitas', receitaController.getReceitas);

//Rota para listar uma receita pelo id
router.get('/receitas/:id', receitaController.getReceitaById);

//Rota para atualizar uma receita
router.put('/receitas/:id', receitaController.updateReceita);

//Rota para deletar uma receita
router.delete('/receitas/:id', receitaController.deleteReceita);

module.exports = router;