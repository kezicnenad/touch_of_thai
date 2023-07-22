// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  location: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
  treatment: { type: mongoose.Schema.Types.ObjectId, ref: "Treatment" },
  datetime: Date,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
