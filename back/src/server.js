// Requerir el módulo express
const express = require('express');
const router = require('./routes/index');

// Crear una nueva aplicación express
const app = express();

app.use(router);

// Exportar la aplicación
module.exports = app;