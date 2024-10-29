const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

const conectaBanco = async() => {
    try{
        await sequelize.authenticate();
        console.log('Conectado a ao banco de dados');
    }catch(error){
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1);
    }
}

module.exports = { sequelize, conectaBanco };