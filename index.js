'use strict'
let mongoose = require('mongoose');
const app = require('./app');
// var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/TouristPlace')
    .then(() => {
        console.log('Database connected successfully');

        //CREACION DEL SERVIDOR
        app.listen(app.get('port'), () => {
            console.log(`Server running at ${app.get('port')}`)

        });
    })
    .catch(err => console.error(err));
   
