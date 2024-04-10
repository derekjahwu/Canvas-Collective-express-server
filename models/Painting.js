const mongoose = require('mongoose');

const PaintingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  year: {
    type: Number
  },
  link: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Painting = mongoose.model('painting', PaintingSchema);
