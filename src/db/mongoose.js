const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/taskapp", {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB via Mongoose..");
  })
  .catch(() => {
    console.log("Connection failed.");
  });
