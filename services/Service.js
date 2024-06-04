// ./models/service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  duration: Number, // Duration in minutes
});

module.exports = mongoose.model('Service', serviceSchema);
