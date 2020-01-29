var express = require('express')
var config = require('./config')
var bodyParser = require('body-parser')

var app = express()

var provinceId

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.sendFile(__dirname+"/views/index.html")
})

app.get('/provinces', (request, response) => {
    config.connect((error) => {
        if (error) throw error

        let selectProvinces = 'SELECT * FROM province'

        config.query(selectProvinces, (error, result) => {
            if (error) throw error
            response.json(result)
        })
    })
})

app.post('/regencies', (request, response) => {
    provinceId = request.body.province_id
    console.log('Kamu memilih nomor '+provinceId)

    // let selectProvinces = 'SELECT * FROM regencies WHERE province_id = '+provinceId
    // config.query(selectProvinces, (error, result) => {
    //     if (error) throw error
    //     response.json(result)
    // })
})

app.get('/regencies', (request, response) => {
    let selectProvinces = 'SELECT * FROM regencies WHERE province_id = '+provinceId
    config.query(selectProvinces, (error, result) => {
        if (error) throw error
        response.json(result)
    })
})

app.listen(process.env.LISTEN_PORT)