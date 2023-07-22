// models/Treatment.js
const mongoose = require("mongoose");

const treatmentSchema = new mongoose.Schema({
  name: String,
  price: Number,
  duration: String,
  description: String,
});

const Treatment = mongoose.model("Treatment", treatmentSchema);
module.exports = Treatment;
