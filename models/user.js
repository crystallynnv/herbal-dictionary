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

const herbSchema = new Schema({
  name: {
      type: String
  },
  benefits: {
      type: String
  },
  uses: {
      type: String
  },
  remedies:[remedySchema]
});

const userSchema = new Schema({
  name: String,
  email: String,
  googleId: String,
  herbs:[herbSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);