'use strict'
const City = require('../models/city');

const controller = {
    getCities: function (req, res) {
        City.find({}).exec()
            .then(cityList => {
                if (!cityList) return res.status(404).send({ Message: "No data found" })
                // console.log(cityList)
                return res.status(200).json(cityList)
            })
            .catch(err => res.status(500).send({ Message: `Error: ${err}` }))
    },
    getCity: function (req, res) {
        let cityId = req.params.id
        if (cityId == null) return res.status(404).send({ message: `city not found` })

        City.findById(cityId).exec()
            .then(data => {
                if (!data) return res.status(404).send({ message: `City not found` })
                return res.status(200).json(data)
            })
            .catch(err => res.status(500).send({ message: `Internal error -> ${err}` }))
    },

saveCity: function (req, res) {
    let City = new City()
    const {name,country,weather} = req.body

    if(name && country){
        City.name = name
        City.country = country
        City.weather = null

        City.save()
        .then(storedCity =>{
            storedCity
            ? res.status(200).json({show : storedCity})
            : res.status(404).send({message: "Error saving the document"})

        })
        .catch(error => res.status(500).send({message: "Error while saving the document"}))
    }else {
        return res.status(400).send({message:"Data is not right"})
    }

},

updateCity : function (req, res) {
    let cityId = req.params.id
    let update = req.body

    City.findByIdAndUpdate(cityId, update,
        {returnDocument : 'after'})
        .then(updateCity => {
            if(!updateCity)
            return res.status(404).send({message: "The document does not exist"})
        return res.status(200).send({show: updateCity})
        })
        .catch(error => res.status(500).send({message: `Error while updating ${error}`}))
}

}

module.exports = controller;