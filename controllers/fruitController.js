const fruits = require('../models/fruits')


//The callback function originally from 'app.get('/',()=>{})
function index(req, res){
res.render('fruits/index', { fruits })
}

// They now have names: "index" and "show"
function show(req, res){
    res.render('fruits/show', { fruit: fruits[req.params.index]})
}

function new1(req, res){
    res.render('fruits/new')
}

function edit(req, res){
    res.render('fruits/edit', { fruit: fruits[req.params.index]} )
}

module.exports = {
    index,
    show,
    new1,
    edit
}

//callback originally from app.get('')