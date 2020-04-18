const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');
//const _ = require('loadash');

module.exports.register = (req, res, next) => {
  var user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.save((err, doc) => {
    if(err) {
      console.log('register error: ' + JSON.stringify(err, undefined, 2));
      if(err.code == 11000) {
        res.status(422).send(['Duplicate email address found']);
      }
    } else {
      res.send(doc);
    }
  });
}

module.exports.authenticate = (req, res, next) => {
  // call for passport authentication
  passport.authenticate('local', (err, user, info) => {
    if(err){
      // error from passport middleware
      return res.status(400).json(err);
    } else if(user) {
      // user is authenticated
      return res.status(200).json({"token": user.generateJwt()});
    } else {
      // unknown user ow wrong password
      return res.status(404).json(info);
    }
  })(req, res);
}

module.exports.userProfile = (req, res, next) => {
  User.findOne({_id: req._id}, (err, user) => {
    if(user) {
      return res.status(200).json({ status: true, user: { name: user.name, email: user.email } });
    } else {
      return res.status(404).json({status: false, message: 'User record not found'});
    }
  });
}

module.exports.addFavourite = (req, res) => {
  User.findByIdAndUpdate (req._id,
    {
      $push: {favouriteBordings: req.body.favouriteBording}
    },
    {
      new: true
    }, (err, doc) =>{
      if(err){
        return res.status(404).json({status: false, message: 'User record not found'});
      }else{
        res.send(doc);
      }
    }
    );
}

