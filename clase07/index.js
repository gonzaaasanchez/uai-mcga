var express = require('express')

var products = require('./data/products.json')

var app = express()
var port = 3000

app.get('/', function(req, res) {
  res.send('<h1>Hello '+Date.now()+'!</h1>')
})

app.get('/products', function(req, res) {
    res.json(products.list)
})

app.get('/products/:id', function(req, res) {
    var product = products.list.find(function(product){
        return parseInt(product.id) === parseInt(req.params.id)
    })
    if(product) res.json(product)
    else res.sendStatus(404)
})

app.listen(port, function() {
  console.log('Example app listening on port '+port)
})