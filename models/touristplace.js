'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let touristSchema = Schema({
    name: String,
    description: String,
    photo: String,
    address: String

});

module.exports = mongoose.model('TouristPlaces', touristSchema, 'TouristPlaces')