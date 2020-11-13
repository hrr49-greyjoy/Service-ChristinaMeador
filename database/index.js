const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/image-slider');

let imagesSchema = mongoose.Schema({
  image_id { type: Number, required: true },
  url { type: String, required: true }

  let Image = mongoose.model('Image', imagesSchema);

  let save = async (arrayOfImageObjs) => {
    let arrayOfImageObjs = arrayOfImageObjs.map(image => {
      return {
        image_id: image.id,
        url: image.url
      };
    });

    Image.insertMany(arrayOfImageObjs, (error, docs) => {
      if (error) {
        console.log('Error inserting into database');
        return error;
      } else {
        console.log('Successfully inserted into the database');
        return docs;
      }
    });
  };


});

module.exports.save = save;