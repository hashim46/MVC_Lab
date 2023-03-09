const vegetables = require('../models/vegetables')


//The callback function originally from 'app.get('/',()=>{})
function index(req, res){
res.render('vegetables/Index', { vegetables })
}

// They now have names: "index" and "show"
function show(req, res){
    res.render('vegetables/Show', { vegetable: vegetables[req.params.index]})
}

module.exports = {
    index,
    show
}

