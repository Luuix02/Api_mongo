'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
.then(() => {
    console.log('conexion a la base de datos exitosa');

//CREACION DEL SERVIDOR
app.listen(port , () => {
    console.log('servior funciona correctamente');
})

})
.catch(err => console.log(err));