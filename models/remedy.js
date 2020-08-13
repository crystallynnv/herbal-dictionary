const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const remedySchema = new Schema({
  name: {
      type: String
  },
  herbs: [{
      type: String
  }],
  make: {
      type: String
  },
  use: {
      type: String
  }
});

module.exports = mongoose.model('Remedy', remedySchema);
