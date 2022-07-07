const express = require('express')
const morgan = require('morgan')
const app = express()

//env

//
let port = 3000

//
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//router
app.use(require('../controller/GestorRegistrarReservaTurnoRT'))

app.listen(port, () => {
    console.log('server on port ', port)
})