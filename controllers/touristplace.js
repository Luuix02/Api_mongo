const TouristPlace = require('../models/touristplace');

const controller = {
    getTouristPlaces: function (req, res) {
        TouristPlace.find({}).exec()
            .then(touristPlaceList => {
                if (!touristPlaceList) return res.status(404).send({ Message: "No data found" })
                // console.log(cityList)
                return res.status(200).json(touristPlaceList)
            })
            .catch(err => res.status(500).send({ Message: `Error: ${err}` }))
    },
    getTouristPlace: function (req, res) {
        let touristPlaceId = req.params.id
        if (touristPlaceId == null) return res.status(404).send({ message: `city not found` })

        TouristPlace.findById(touristPlaceId).exec()
            .then(data => {
                if (!data) return res.status(404).send({ message: `City not found` })
                return res.status(200).json(data)
            })
            .catch(err => res.status(500).send({ message: `Internal error -> ${err}` }))
    },

    saveTouristPlace: function (req, res) {
        let touristPlace = new TouristPlace()
        const { name, description, photo, address } = req.body

        if (name && description && address) {
            touristPlace.name = name
            touristPlace.description = description
            touristPlace.photo = null
            touristPlace.address = address

            touristPlace.save()
                .then(storedTouristPlace => {
                    storedTouristPlace
                        ? res.status(200).json({ TouristPlace: storedTouristPlace })
                        : res.status(404).send({ message: "Error saving the document" })

                })
                .catch(error => res.status(500).send({ message: "Error while saving the document" }))
        } else {
            return res.status(400).send({ message: "Data is not right" })
        }

    },

    updateTouristPlace: function (req, res) {
        let touristPlaceId = req.params.id
        let update = req.body

        TouristPlace.findByIdAndUpdate(touristPlaceId, update,
            { returnDocument: 'after' })
            .then(updatedTouristPlace => {
                if (!updatedTouristPlace)
                    return res.status(404).send({ message: "The document does not exist" })
                return res.status(200).send({ touristPlace: updatedTouristPlace })
            })
            .catch(error => res.status(500).send({ message: `Error while updating ${error}` }))
    },

    deleteTouristPlace: function (req, res) {
        let touristPlaceId = req.params.id

        TouristPlace.findByIdAndDelete(touristPlaceId)
            .then(removedTouristPlace => {
                if (!removedTouristPlace) return res.status(404).send({ message: "The city does not exist" })
                return res.status(200).send({ city: removedTouristPlace })
            })

            .catch(err => res.status(500).send({ message: "Error while deleting" }))

    },

}

module.exports = controller;