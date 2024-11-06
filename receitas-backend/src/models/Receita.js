const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Receita = sequelize.define('Receita', {
    titulo:{
        type: DataTypes.STRING,
        allowNull: false    
    },

    ingredientes:{
        type: DataTypes.STRING,
        allowNull: false
    },

    modo_preparo:{
        type: DataTypes.STRING,
        allowNull: false
    },

    tempo_preparo:{
        type: DataTypes.STRING,
        allowNull: false
    },

    rendimento:{
        type: DataTypes.STRING,
        allowNull: false
    },
});

//Sincrioniza o model com o banco de dados
Receita.sync({ force: false }).then(() => console.log('Tabela Receita criada com sucesso!'));

module.exports = Receita;