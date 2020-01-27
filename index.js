var express = require('express')
var config = require('./config')

var app = express()

app.get('/', (request, response) => {
    response.sendFile(__dirname+"/views/index.html")
})

app.listen(process.env.LISTEN_PORT)