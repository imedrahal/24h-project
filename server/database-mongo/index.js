const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1:27017/mern-todo";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db