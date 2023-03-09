const express =  require('express')

//Creates our router 
const router = express.Router()


//Load our controller and its route logic
const meatController = require('../controllers/meatController')

//Setup an 'index' router for meats and attaching it to router object
router.get('/', meatController.index)


router.get('/new', meatController.new1)

//Setup a 'show' router for meats and attaching it to router object
router.get('/:index', meatController.show)


router.get('/:index/edit', meatController.edit)


module.exports = router