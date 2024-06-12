const express = require('express');
const bodyParser = require('body-parser');
const itemsRoutes = require('./routes/contents');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allow all domains
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });
  
app.use(bodyParser.json());
app.use('/api/contents', itemsRoutes);


module.exports = app;
