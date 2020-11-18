const express = require('express');
const app = express();
const getAllImages = require('../database/index.js');
const db = require('../database/index.js');
const bluebird = require('bluebird');

const port = 8080;

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/images', async function(req, res) {
  try {
    const allImageObjs = await db.getAllImages();
    console.log(allImageObjs);
    res.status(200).json(allImageObjs);
  } catch (error) {
    console.log('There was an error in getting all image objs:', error);
    res.status(404).send(error);
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})