// frontend-app/src/components/Locations.js
import React from "react";
import { Link } from "react-router-dom";

const Locations = ({ acceptedLocation }) => {
  return (
    <div>
      <h2>Locations Component</h2>
      <p>{acceptedLocation.title}</p>
      <Link to="/">Nazad</Link>
    </div>
  );
};

export default Locations;
