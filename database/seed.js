const express = require('express');
const faker = require('faker');
const db = require('./index.js');

var getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min ) + min);
};

var getImageGroup = (x) => {
  var images = [
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'The most friendly horses', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/adrian-TvN54bnuQg8-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'We have custom fire pits', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/ahmed-zayan-6h0xlEZoYZY-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'We are creating a homestead that is as self sustaining', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/ahmed-zayan-6h0xlEZoYZY-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'We are a Non profit Farm Animal Sanctuary', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/alice-donovan-rouse-z9F_yK4Nmf8-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'We use our farm road as an entrance to the camping area', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/andreas-ronningen-i9FLJwYhVQs-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'Natural features you\'ll find at Hummingbird Hollow Farm Sanctuary', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/andrew-gloor-I1RZSDvvStY-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'You can pitch your tent in the fields or at the edge of the woods, pick your own spot.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/ben-duchac-3fJOXw1RbPo-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'Very secluded, you can be out of sight of any civilization.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/blake-wisz-TcgASSD5G04-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'Close to 7 acres total.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/bobby-burch-MEBqI9fzqao-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : '2 communal fire pits and an outdoor shower house with hot water!', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/brooks-rice-8-jqqr-rpo0-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'We have fire logs available for our fire pits.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/chris-holder-uY2UIyO5o5c-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'Pitch your own tent by our 5 acres lake.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/christopher-jolly-gcCcIy6Fc_M-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'You will hear the frogs croak at night, see sights of blue herons or Canadian geese flying in, and hear our own geese and ducks greet you from across the lake.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/clay-banks-Ppz6b-YUDHw-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'You will see my goat barn and see the majestic angora goats with shimmering coats come in for their feedings in the morning and leave to go to pasture afterwards.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/daiga-ellaby-3beArYu-mUo-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : '84 acres of hardwood trees forest to explore.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/daniel-nainggolan-W6dRiZHDZAo-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'The site of an old moonshine distillery can be found in the woods.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/denys-nevozhai-63Znf38gnXk-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'In the spring you may catch sights of the Missouri Bunting, Baltimore Oriols, in addition to cardinals, blue jays, wild turkeys, turkey vultures, bald eagles.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/dino-reichmuth-5Rhl-kSRydQ-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'The lake is for your viewing pleasure. To maintain the wildlife use, we ask that you don\'t fish, swim or bathe in it.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/dmitrii-vaccinium--mSeLrJuo78-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'We are a full working farm with chickens for eggs and meat, goats for milk, fiber and meat.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/edho-fitrah-ELevCx8PX4o-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'The land/pond was beautiful and the bugs didn\'t bother us (in May) which was a nice bonus.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/eric-muhr-ZPsJW-OLZQM-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'Perfect way for us to get away and be in nature.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/geronimo-giqueaux-o3yKM6cz69I-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'Our family had a wonderful evening on this beautiful farm.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/glen-jackson-mzZVGFfMOkA-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'The hosts were friendly and gave the kids a tour of the farm and talked with them about the animals.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/grant-ritchie-c1XZjkM_-q8-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'Lovely lake and farm. Peaceful, beautiful drives nearby.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/jesse-gardner-wTVr4HR4SBI-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'Truly a unique and peaceful experience. The farm is beautiful.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/myles-tan-IWCljYv1TJw-unsplash.jpg" },
    { title : 'Hummingbird Hollow Farm Sanctuary', description : 'You really feel like you have the place to yourself, and walking around to see the animals is an added bonus.', url : "https://feccampingimages.s3.us-east-2.amazonaws.com/patrick-hendry-euaPfbR6nC0-unsplash.jpg" }
  ];

  var imageGroup = [];
  var i=0;
  while (i < x) {
    var index = getRandomNum(0, images.length);
    console.log(images[index]);
    imageGroup.push(images[index]);
    i++;
  }
  return imageGroup;
}

db.saveMany(getImageGroup(getRandomNum(1, 30)));