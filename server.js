/* eslint-disable */

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const db = config.DB[process.env.NODE_ENV] || process.env.DB;
const PORT = config.PORT[process.env.NODE_ENV] || process.env.PORT;
const api = require ('./routes/api');

mongoose.connect(db, function (err) {
  if (!err) {
    console.log(`connected to the Database: ${db}`);
  } else {
    console.log(`error connecting to the Database ${err}`);
  }
});

app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.status(200).send('All good!');
});

app.use('/api', api);

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});

app.use(function(err, req, res, next) {
if (err.status) {
  res.status(err.status).json({message: err.message});
}
next(err);
});

app.use(function (err, req, res, next) {
  res.status(500).json({message: 'Server error'});
});

module.exports = app;