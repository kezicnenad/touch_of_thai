// controllers/orderController.js
const Order = require('../models/Order');

const createOrder = (req, res) => {
  const { userId, locationId, treatmentId, datetime } = req.body;

  // Provjera jesu li lokacija i tretman važeći
  Promise.all([
    Location.findById(locationId).exec(),
    Treatment.findById(treatmentId).exec(),
  ]).then(([location, treatment]) => {
    if (!location || !treatment) {
      res.sendStatus(400);
    } else {
      // Provjera je li odabrano vrijeme u budućnosti
      const selectedDatetime = new Date(datetime);
      const currentDatetime = new Date();
      if (selectedDatetime <= currentDatetime) {
        res.sendStatus(400);
      } else {
        // Spremi narudžbu
        const newOrder = new Order({
          userId,
          location: locationId,
          treatment: treatmentId,
          datetime: selectedDatetime,
        });

        newOrder.save((err) => {
          if (err) {
            res.sendStatus(500);
          } else {
            res.sendStatus(201);
          }
        });
      }
    }
  }).catch((err) => {
    res.sendStatus(500);
  });
};

module.exports = {
  createOrder,
};
