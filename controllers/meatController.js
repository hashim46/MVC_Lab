const meats = require('../models/meats')


//The callback function originally from 'app.get('/',()=>{})
function index(req, res){
res.render('meats/Index', { meats })
}

// They now have names: "index" and "show"
function show(req, res){
    res.render('meats/Show', { meat: meats[req.params.index]})
}

module.exports = {
    index,
    show
}