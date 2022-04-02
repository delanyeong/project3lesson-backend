const express = require("express");
//? configuration
const app = express();
const PORT = 2000;
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Tuesday started");
});
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT); });