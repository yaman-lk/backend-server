const mongoose = require('mongoose');

var inquirySchema = new mongoose.Schema({
  bordingId: {
    type: String
  },
  userId: {
    type: String
  },
  reason: {
    type: String
  },
  description: {
    type: String
  },
  proofUrl: {
    type: String
  },
});

mongoose.model('Inquiry', inquirySchema);
