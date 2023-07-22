// routes/treatmentRoutes.js
const express = require("express");
const router = express.Router();
const treatmentController = require("../controllers/treatmentController");

router.get(
  "/",
  (req, res) => {
    res.send("<title>Treatments</title><h1>Treatments</h1>");
  },
  treatmentController.getAllTreatments
);

module.exports = router;
