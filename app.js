const express = require('express');
const bodyParser = require('body-parser');
const itemsRoutes = require('./routes/contents');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/contents', itemsRoutes);

app.listen(port, () => {
  console.log(`API listening on PORT ${port} `)
})

