// 'use strict'

const express = require('express');
const cityRoutes = require('./routers/city');


const app = express();

//settings
app.set('port' , process.env.PORT || 3000)

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.use('/api/city', cityRoutes)

module.exports = app;


