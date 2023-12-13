'use strict' 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let citySchema = Schema ({
    name: String,
    country: String,
    weather: String
});

module.exports = mongoose.model('City' , citySchema, 'City')