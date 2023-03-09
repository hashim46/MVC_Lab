const express =  require('express')

//Creates our router 
const router = express.Router()


//Load our controller and its route logic
const vegetablesController = require('../controllers/vegetablesController')

//Setup an 'index' router for vegetabless and attaching it to router object
router.get('/', vegetablesController.index)


router.get('/new', vegetablesController.new1)

//Setup a 'show' router for vegetabless and attaching it to router object
router.get('/:index', vegetablesController.show)


router.get('/:index/edit', vegetablesController.edit)


module.exports = router