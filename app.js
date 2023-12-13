// 'use strict'

const express = require('express');
const cityRoutes = require('./routers/city');
const touristRoutes = require('./routers/touristplace')


const app = express();

//settings
app.set('port', process.env.PORT || 3000)

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api/city', cityRoutes)
app.use('/api/tourist', touristRoutes)

module.exports = app;


