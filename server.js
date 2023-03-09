// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 




//Load our fruit routes
const fruitRoutes= require('./routes/fruitRoutes')


// npm install jsx-view-engine react react-dom
// Load the create engine
const {createEngine} = require('jsx-view-engine')

app.set('view engine', 'jsx')
app.engine('jsx', createEngine())



app.use('/fruits', fruitRoutes)


//Load our meat routes
const meatRoutes = require('./routes/meatRoutes')

app.use('/meats', meatRoutes)


//vegetables

const vegetablesRoutes = require('./routes/vegetableRoutes')

app.use('/vegetables', vegetablesRoutes)

//Don't put a . before the path /

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})