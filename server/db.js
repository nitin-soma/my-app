const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userforms");

const database = mongoose.connection;

database.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

database.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
