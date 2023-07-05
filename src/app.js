const express = require("express");

// Create Express APP
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hebele Huebele..." });
});

module.exports = app;
