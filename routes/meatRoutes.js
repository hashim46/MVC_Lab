const express = require('express')

const router = express.Router()

//const meats = require('../models/meats')

const meatController= require('../controllers/meatController')

// Setup an "index" route for meats
router.get('/', meatController.index)



// Setup a "show" route for fruits
router.get('/:index', meatController.show)

module.exports = router