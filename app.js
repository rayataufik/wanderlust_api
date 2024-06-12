const express = require('express');
const bodyParser = require('body-parser');
const itemsRoutes = require('./routes/contents');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'api_documentation.html'));
});

app.use(bodyParser.json());
app.use('/api/contents', itemsRoutes);


module.exports = app;
