const express =  require('express')

//Creates our router 
const router = express.Router()


//Load our controller and its route logic
const fruitController = require('../controllers/fruitController')

//Setup an 'index' router for fruits and attaching it to router object
router.get('/', fruitController.index)


router.get('/new', fruitController.new1)

//Setup a 'show' router for fruits and attaching it to router object
router.get('/:index', fruitController.show)


router.get('/:index/edit', fruitController.edit)


module.exports = router

