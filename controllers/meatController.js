const meats = require('../models/meats')


//The callback function originally from 'app.get('/',()=>{})
function index(req, res){
res.render('meats/index', { meats })
}

// They now have names: "index" and "show"
function show(req, res){
    res.render('meats/show', { meat: meats[req.params.index]})
}

function new1(req, res){
    res.render('meats/new')
}

function edit(req, res){
    res.render('meats/edit', { meat: meats[req.params.index]} )
}

module.exports = {
    index,
    show,
    new1,
    edit
}