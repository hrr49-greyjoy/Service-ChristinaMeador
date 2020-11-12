const express = require('express');
let app = express();
const db = require('../database/index.js');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/images', async function (req, res) {
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});