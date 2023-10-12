var express = require("express");

var products = require("./data/products.json");
var clients = require("./data/clients.json");

var app = express();
var port = 3000;

// general

app.get("/", function (req, res) {
  res.send("<h1>Hello " + Date.now() + "!</h1>");
});

app.listen(port, function () {
  console.log("Example app listening on port " + port);
});

// products

app.get("/products", function (req, res) {
  res.json(products.list);
});

app.get("/products/:id", function (req, res) {
  var product = products.list.find(function (product) {
    return parseInt(product.id) === parseInt(req.params.id);
  });
  if (product) res.json(product);
  else res.sendStatus(404);
});

// clients

app.get("/clients", function (req, res) {
  res.json(clients.list);
});

app.get("/clients/:id", function (req, res) {
  var client = clients.list.find(function (client) {
    return parseInt(client.id) === parseInt(req.params.id);
  });
  if (client) res.json(client);
  else res.sendStatus(404);
});
