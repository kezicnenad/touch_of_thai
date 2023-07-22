// controllers/treatmentController.js
const Treatment = require("../models/Treatment");

const getAllTreatments = (req, res) => {
  Treatment.find({}, (err, treatments) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(treatments);
    }
  });
};

module.exports = {
  getAllTreatments,
};
