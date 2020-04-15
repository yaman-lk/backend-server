const mongoose = require('mongoose');
const Bording = mongoose.model('Bording');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports.add = (req, res) => {
  var bording = new Bording({
      bordingType: req.body.bordingType,
      residentType: req.body.residentType,
      location: req.body.location,
      images: req.body.images,
      ownerId: req.body.ownerId,
      ownerDetails: req.body.ownerDetails,
      rental: req.body.rental,
      keyMoney: req.body.keyMoney,
      description: req.body.description,
      numberOfBeds: req.body.numberOfBeds,
      bathroomType: req.body.bathroomType,
      fan: req.body.fan,
      ac: req.body.ac,
      furniture: req.body.furniture,
      kitchen: req.body.kitchen,
      numberOfRooms: req.body.numberOfRooms,
      numberOfBathrooms: req.body.numberOfBathrooms,
  });

  bording.save((err, doc) => {
    if(err) {
      console.log('add error: ' + JSON.stringify(err, undefined, 2));
    } else {
      res.send(doc);
    }
  });
}

module.exports.all = (req,res) => {
  Bording.find((err,docs) =>{
    if(!err){
        res.send(docs);
    }else{
        res.send('Error in retrieving: ' + JSON.stringify(err, undefined, 2));
    }
  });
}


module.exports.posted = (req, res) => {
  Bording.find({ownerId : req._id}, (err, docs) => {
    if(docs) {
      if(docs.length > 0) {
        return res.send(docs);
      }
      else{
        return res.status(404).json({status: false, message: 'not found bording by this user'});
      }
    } else {
      return res.status(404).json({status: false, message: 'not found bording by this user'});
    }
  });
}

module.exports.bordingById = (req, res) => {
    // if(!ObjectId.isValid(req.params.id)){
    //   return res.status(400).send("No records");
    // }
  Bording.findById(req.params.id, (err, docs) => {
    if(docs) {
      if(!err) {
        return res.send(docs);
      }
      else{
        return res.status(404).json({status: false, message: 'not found bording by this user'});
      }
    } else {
      return res.status(404).json({status: false, message: 'not found bording by this user'});
    }
  });
}