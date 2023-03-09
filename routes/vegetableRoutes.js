const express  = require('express')

const router = express.Router()

const vegetablesController = require('../controllers/vegetablesController')

// Setup an "index" route for vegetables
router.get('/', vegetablesController.index)

// Setup a "show" route for vegetables
router.get('/:index', vegetablesController.show)

module.exports = router