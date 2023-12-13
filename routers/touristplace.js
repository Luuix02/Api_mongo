const { Router } = require('express');
const touristPlaceController = require('../controllers/touristplace');

const router = Router();

router.get('/', touristPlaceController.getTouristPlaces);
router.get('/:id=?', touristPlaceController.getTouristPlace);
router.post('/save-tourist', touristPlaceController.saveTouristPlace);
router.put('/edit-tourist/:id?', touristPlaceController.updateTouristPlace);
router.delete('/delete-tourist/:id?', touristPlaceController.deleteTouristPlace);

module.exports = router;