const mongoose = require('mongoose');
const Inquiry = mongoose.model('Inquiry');

module.exports.addInquiry = (req, res) => {
  var inquiry = new Inquiry();
  inquiry.bordingId = req.body.bordingId;
  inquiry.userId = req._id;
  inquiry.reason = req.body.reason;
  inquiry.description = req.body.description;
  inquiry.proofUrl = req.body.proofUrl;
  inquiry.save((err, doc) => {
    if(err) {
      console.log('Inquiry posting error: ' + JSON.stringify(err, undefined, 2));
    } else {
      res.send(doc);
    }
  });
}