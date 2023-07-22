// frontend-app/src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Locations from "./components/Locations";
import Navigation from "./components/Navigation";

const App = () => {
  const [acceptedLocation, setAcceptedLocation] = useState(null);

  const handleAccept = (location) => {
    setAcceptedLocation(location);
  };

  return (
    <Router>
      <div className="off-5 m-3 text-center">
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Main onAccept={handleAccept} />} />
          <Route
            path="/locations"
            element={<Locations acceptedLocation={acceptedLocation} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
