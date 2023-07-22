// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post(
  "/",
  (req, res) => {
    res.send("<title>Order</title><h1>Order</h1>");
  },
    orderController.createOrder
);

module.exports = router;
