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

// const Task = mongoose.model("Task", {
//   task: {
//     type: String,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
// });
