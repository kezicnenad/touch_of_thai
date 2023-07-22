// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config(); // Dodajemo dotenv biblioteku ovdje

const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.set("strictQuery", false);

// MongoDB povezivanje
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// // Passport konfiguracija (Google i Facebook)
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:3000/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       // Ovdje biste spremili korisnika u bazu podataka ako to već niste implementirali
//       return done(null, profile);
//     }
//   )
// );

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: FACEBOOK_APP_ID,
//       clientSecret: FACEBOOK_APP_SECRET,
//       callbackURL: "http://localhost:3000/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       // Ovdje biste spremili korisnika u bazu podataka ako to već niste implementirali
//       return done(null, profile);
//     }
//   )
// );

// // Serijalizacija i deserijalizacija korisnika (za session support)
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// Rute za lokacije
const locationRoutes = require("./routes/locationRoutes");
app.use("/locations", locationRoutes);

// Rute za tretmane
const treatmentRoutes = require("./routes/treatmentRoutes");
app.use("/treatments", treatmentRoutes);

// Rute za narudžbe
const orderRoutes = require("./routes/orderRoutes");
app.use("/orders", orderRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("<title>Touch of Thai</title><h1>Main</h1>");
});

// Pokretanje servera
app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
