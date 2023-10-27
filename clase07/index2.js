// import * as mongoose from "mongoose";
var express = require('express');
var mongoose = require('mongoose');
const port = 3000 || 8000;
const MONGODB_URL =
  'mongodb+srv://gonzalosanchez:hola123123@cluster0.zrttfst.mongodb.net/example?retryWrites=true&w=majority' ||
  '';

var app = express();
app.use(express.json());

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log({
      level: 'info',
      message: 'Database connected',
      label: 'mongodb',
    });
    app.listen(port, () => {
      console.log({
        level: 'info',
        message: 'server listening on port: ' + port,
        label: 'server',
      });
    });
  })
  .catch((error) =>
    console.log({
      level: 'error',
      message: error,
      label: 'mongodb',
    })
  );
