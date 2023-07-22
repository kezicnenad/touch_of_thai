// frontend-app/src/components/Treatments.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/treatments")
      .then((response) => {
        setTreatments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Treatments</h2>
      <ul>
        {treatments.map((treatment) => (
          <li key={treatment._id}>
            <h3>{treatment.name}</h3>
            <p>Price: {treatment.price}</p>
            <p>Duration: {treatment.duration}</p>
            <p>{treatment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Treatments;
