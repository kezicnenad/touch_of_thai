// models/Location.js
const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  title: String,
  address: String,
  description: String,
  workingHours: String,
  rating: Number,
  images: [String],
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
