// controllers/locationController.js
const Location = require("../models/Location");

const getAllLocations = (req, res) => {
  Location.find({}, (err, locations) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(locations);
    }
  });
};

module.exports = {
  getAllLocations,
};
