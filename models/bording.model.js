const mongoose = require('mongoose');

var bordingSchema = new mongoose.Schema({
  bordingType: {type: String},
  residentType: {type: Array},
  location: {type: String},
  images: {type: Array},
  ownerId: {type: String},
  ownerDetails: {type: Object},
  rental: {type: Number},
  keyMoney: {type: Number},
  description: {type: String},
  numberOfBeds: {type: Number},
  bathroomType: {type:String},
  fan: {type: Boolean},
  ac: {type: Boolean},
  furniture: {type: Boolean},
  kitchen: {type: Boolean},
  numberOfRooms: {type: Number},
  numberOfBathrooms: {type: Number}
});

mongoose.model('Bording', bordingSchema);