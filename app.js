'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//CARGAR ARCHIVOS DE RUTAS
var project_routes = require('./routers/project');

//middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS

//RUTAS
// app.get('/test', (req, res) => {
//     res.status(200).send({ message: 'hola mundo' })

// })
app.use('/api' , project_routes);

//EXPORTAR

module.exports = app;
