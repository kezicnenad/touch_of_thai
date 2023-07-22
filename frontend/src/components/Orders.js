// frontend-app/src/components/Orders.js
import React, { useState } from "react";
import axios from "axios";

const Orders = () => {
  const [userId, setUserId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [treatmentId, setTreatmentId] = useState("");
  const [datetime, setDatetime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const orderData = {
      userId,
      locationId,
      treatmentId,
      datetime,
    };

    axios
      .post("http://localhost:5000/orders", orderData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Make an Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location ID"
          value={locationId}
          onChange={(e) => setLocationId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Treatment ID"
          value={treatmentId}
          onChange={(e) => setTreatmentId(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Orders;
