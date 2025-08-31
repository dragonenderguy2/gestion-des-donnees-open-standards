const mongoose = require('mongoose');

const standardSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateAjout: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Standard', standardSchema);
