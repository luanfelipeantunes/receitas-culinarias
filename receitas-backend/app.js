const express = require('express');
const { conectaBanco } = require('./src/config/db');
const receitaRoute = require('./src/routes/receitaRoute');

const app = express();

//Conecta ao banco de dados
conectaBanco();

app.use(express.json());

app.use('/api', receitaRoute);

module.exports = app;