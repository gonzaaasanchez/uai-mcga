var express = require("express");
const fs = require("fs");

var products = require("./data/products.json");
var clients = require("./data/clients.json");

var app = express();
app.use(express.json());
var port = 3000;

// general

app.get("/", function (req, res) {
  res.send("<h1>Hello " + Date.now() + "!</h1>");
});

app.listen(port, function () {
  console.log("Example app listening on port " + port);
});

// write

function writeData(type, data, callback) {
  console.log(data);
  fs.writeFile(
    type + ".json",
    JSON.stringify(data, null, 2),
    "utf8",
    (error) => {
      if (error) {
        callback(error);
        return;
      }
      callback(null);
    }
  );
}

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

app.post("/products", (req, res) => {
  const newProduct = {
    id: req.body.id,
    prod: req.body.prod,
    price: req.body.price,
  };

  products.list.push(newProduct);

  writeData("products", newProduct, (writeError) => {
    if (writeError) {
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(newProduct);
  });
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
