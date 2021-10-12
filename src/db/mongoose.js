const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB via Mongoose..");
  })
  .catch(() => {
    console.log("Connection failed.");
  });
