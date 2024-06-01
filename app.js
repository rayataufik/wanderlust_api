const express = require('express');
const bodyParser = require('body-parser');
const itemsRoutes = require('./routes/contents');

const app = express();

app.use(bodyParser.json());
app.use('/api/contents', itemsRoutes);

