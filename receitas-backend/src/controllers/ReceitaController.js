const Receita = require('../models/Receita');

exports.createReceita = async (req, res) =>{
    try {
        const receita = await Receita.create(req.body);
        return res.status(201).json(receita);
    }catch(err){
        return res.status(422).json({error: err.message});
    }
}

exports.getReceitas = async (req, res) => {
    try {
        const receitas = await Receita.findAll();
        return res.status(200).json(receitas);
    } catch (error) {
        return res.status(422).json({error: error.message});
    }
}

exports.getReceitaById = async (req, res) => {
    try {
        const receita = await Receita.findByPk(req.params.id);
        if (receita) {
            return res.status(200).json(receita);
        } else {
            return res.status(404).json({message: 'Receita não encontrada'});
        }
    } catch (error) {
        return res.status(422).json({error: error.message});
    }
}

exports.updateReceita = async (req, res) => {
    try {
        const receita = await Receita.findByPk(req.params.id);
        if (receita) {
            await receita.update(req.body);
            return res.status(200).json(receita);
        } else {
            return res.status(404).json({message: 'Receita não encontrada'});
        }        
    }catch(err){
        return res.status(422).json({error: err.message});
    }
}

exports.deleteReceita = async (req, res) => {
    try {
        const receita = await Receita.findByPk(req.params.id);
        if (receita) {
            await receita.destroy();
            return res.status(200).json({message: 'Receita deletada com sucesso!'});
        } else {
            return res.status(404).json({message: 'Receita não encontrada'});
        }
    } catch (error) {
        return res.status(422).json({error: error.message});
    }
}
