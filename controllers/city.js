// 'use strict'
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
        let city = new City()
        const { name, country, weather } = req.body

        if (name && country) {
            city.name = name
            city.country = country
            city.weather = weather

            city.save()
                .then(storedCity => {
                    storedCity
                        ? res.status(200).json({ city: storedCity })
                        : res.status(404).send({ message: "Error saving the document" })

                })
                .catch(error => res.status(500).send({ message: "Error while saving the document" }))
        } else {
            return res.status(400).send({ message: "Data is not right" })
        }

    },

    updateCity: function (req, res) {
        let cityId = req.params.id
        let update = req.body

        City.findByIdAndUpdate(cityId, update,
            { returnDocument: 'after' })
            .then(updatedCity => {
                if (!updatedCity)
                    return res.status(404).send({ message: "The document does not exist" })
                return res.status(200).send({ city: updatedCity })
            })
            .catch(error => res.status(500).send({ message: `Error while updating ${error}` }))
    },

    deleteCity: function (req, res) {
        let cityId = req.params.id

        City.findByIdAndDelete(cityId)
            .then(removedCity => {
                if (!removedCity) return res.status(404).send({ message: "The city does not exist" })
                return res.status(200).send({ city: removedCity })
            })

            .catch(err => res.status(500).send({ message: "Error while deleting" }))

    },
    deleteShow: function (req, res) {
        let showId = req.params.id

        Show.findByIdAndRemove(showId)
            .then(removedShow => {
                if (!removedShow) return res.status(404).send({ message: "The show does not exist" })
                return res.status(200).send({ show: removedShow })
            })
            .catch(err => res.status(500).send({ message: "Error while deleting" }))
    }
}

module.exports = controller;