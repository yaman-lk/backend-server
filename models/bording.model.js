const mongoose = require('mongoose');

var bordingSchema = new mongoose.Schema({
  bordingType: {type: String},
  residentType: {type: String},
  location: {type: String},
  images: {type: Array},
  ownerId: {type: String},
  ownerDetails: {type: Object},
  rental: {type: String},
  keyMoney: {type: String},
  description: {type: String},
  numberOfBeds: {type: Number},
  bathroomType: {type:String},
  fan: {type: Boolean},
  ac: {type: Boolean},
  furniture: {type: Boolean},
  kitchen: {type: Boolean},
  numberOfRooms: {type: Number},
  numberOfBathrooms: {type: Number},
});

mongoose.model('Bording', bordingSchema);