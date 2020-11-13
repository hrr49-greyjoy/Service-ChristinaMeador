/* mySeedScript.js */
// require the necessary libraries
const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const _ = require("lodash");
// Connection URL
const url = "mongodb://localhost:8080";

// Database Name
const dbName = "image-slider";

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  const db = client.db(dbName);

  // get access to the relevant collections
  const imagesCollection = db.collection("images");
  // make a bunch of images
  let images = [];
  for (let i = 0; i < 500; i++) {
    const data = {
      image_url: faker.image.imageUrl(),
    };
    images.push(data);

    // visual feedback
    console.log(data.image_url);
  }
  imagesCollection.insertMany(images);

  console.log("Database seeded! :)");
  client.close();
});