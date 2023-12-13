'use strict'

const { Router } = require('express');
const cityController = require('../controllers/city');

const router = Router();

router.get('/', cityController.getCities);
router.get('/:id=?' , cityController.getCity);
router.post('/save-city', cityController.saveCity);
router.put('/edit-City/:id?' , cityController.updateCity);

module.exports = router;