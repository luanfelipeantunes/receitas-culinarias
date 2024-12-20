const express = require('express');
const { conectaBanco } = require('./src/config/db');
const receitaRoute = require('./src/routes/receitaRoute');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3001'
}))

//Conecta ao banco de dados
conectaBanco();

app.use(express.json());

app.use('/api', receitaRoute);

module.exports = app;