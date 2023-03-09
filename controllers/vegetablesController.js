const vegetables = require('../models/vegetables')


//The callback function originally from 'app.get('/',()=>{})
function index(req, res){
res.render('vegetables/index', { vegetables })
}

// They now have names: "index" and "show"
function show(req, res){
    res.render('vegetables/show', { vegetable: vegetables[req.params.index]})
}

function new1(req, res){
    res.render('vegetables/new')
}

function edit(req, res){
    res.render('vegetables/edit', { vegetable: vegetables[req.params.index]} )
}

module.exports = {
    index,
    show,
    new1,
    edit
}

