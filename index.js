var express = require('express')
var config = require('./config')

var app = express()

app.get('/', (request, response) => {
    response.send('Hallo World!')
})

app.listen(process.env.LISTEN_PORT)