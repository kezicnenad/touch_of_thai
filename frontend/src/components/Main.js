// frontend-app/src/components/Main.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Main = ({ onAccept }) => {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/locations")
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAccept = (location) => {
    onAccept(location);
    navigate("/locations");
  };

  return (
    <div>
      <h2 className="m-5">Main Component</h2>
      {locations.map((location) => (
        <div key={location._id} className="m-3">
          <button
            className="btn btn-lg btn-primary"
            onClick={() => handleAccept(location)}
          >
            {location.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Main;
