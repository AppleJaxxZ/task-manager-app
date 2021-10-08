const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = Task;
