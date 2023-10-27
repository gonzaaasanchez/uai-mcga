var express = require('express');
const fs = require('fs');

var products = require('./data/products.json');
var clients = require('./data/clients.json');

var app = express();
app.use(express.json());
var port = 3000;

// general

app.get('/', function (req, res) {
  res.send('<h1>Hello ' + Date.now() + '!</h1>');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

// products

app.get('/products', function (req, res) {
  res.json(products.list);
});

app.get('/products/:id', function (req, res) {
  var product = products.list.find(function (product) {
    return parseInt(product.id) === parseInt(req.params.id);
  });
  if (product) res.json(product);
  else res.sendStatus(404);
});

app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.list[products.list.length - 1].id + 1;
  products.list.push(newProduct);

  fs.writeFileSync(
    './data/products.json',
    JSON.stringify(products, null, 2),
    'utf-8'
  );

  res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;
  const index = products.list.findIndex(function (item) {
    if (item.id === productId) {
      return true;
    }
  });

  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    products.list[index] = { ...products.list[index], ...updatedProduct };

    fs.writeFileSync(
      './data/products.json',
      JSON.stringify(products, null, 2),
      'utf-8'
    );

    res.json(products.list[index]);
  }
});

app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.list.find(function (item) {
    if (item.id === productId) {
      return true;
    }
  });

  if (!product) {
    res.sendStatus(404);
  } else {
    products.list = products.list.filter(function (item) {
      if (item.id !== productId) {
        return true;
      }
    });

    fs.writeFileSync(
      './data/products.json',
      JSON.stringify(products, null, 2),
      'utf-8'
    );

    res.status(204).send();
  }
});

// clients

app.get('/clients', function (_, res) {
  res.json(clients.list);
});

app.get('/clients/:id', function (req, res) {
  var client = clients.list.find(function (client) {
    return parseInt(client.id) === parseInt(req.params.id);
  });
  if (client) res.json(client);
  else res.sendStatus(404);
});

app.post('/clients', (req, res) => {
  const newClient = req.body;
  newClient.id = clients.list[clients.list.length - 1].id + 1;
  clients.list.push(newClient);

  fs.writeFileSync(
    './data/clients.json',
    JSON.stringify(clients, null, 2),
    'utf-8'
  );

  res.status(201).json(newClient);
});

app.put('/clients/:id', (req, res) => {
  const clientId = parseInt(req.params.id);
  const updatedClient = req.body;
  const index = clients.list.findIndex(function (item) {
    if (item.id === clientId) {
      return true;
    }
  });

  if (index === -1) {
    res.status(404).json({ error: 'Client not found' });
  } else {
    clients.list[index] = { ...clients.list[index], ...updatedClient };

    fs.writeFileSync(
      './data/clients.json',
      JSON.stringify(clients, null, 2),
      'utf-8'
    );

    res.json(clients.list[index]);
  }
});

app.delete('/clients/:id', (req, res) => {
  const clientId = parseInt(req.params.id);
  const client = clients.list.find(function (item) {
    if (item.id === clientId) {
      return true;
    }
  });

  if (!client) {
    res.sendStatus(404);
  } else {
    clients.list = clients.list.filter(function (item) {
      if (item.id !== clientId) {
        return true;
      }
    });

    fs.writeFileSync(
      './data/clients.json',
      JSON.stringify(clients, null, 2),
      'utf-8'
    );

    res.status(204).send();
  }
});
