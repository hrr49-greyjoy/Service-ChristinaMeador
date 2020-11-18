const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/image-slider', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

let imagesSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String
});

let Image = mongoose.model('Image', imagesSchema);

let saveMany = (images) => {
  Image.insertMany(images, (err, docs) => {
    if (err) {
      console.log('error inserting into db');
      return error;
    } else {
      console.log('Successfully inserted into database!');
      return docs;
    }
  });
};

let getAllImages = async () => {
  try {
    let allImages = await Image.find({});
    return allImages;
  } catch (error) {
    console.log('Error in mongoose query for getAllImages');
    return error;
  }
}

module.exports.db = db;
module.exports.getAllImages = getAllImages;
module.exports.saveMany = saveMany;