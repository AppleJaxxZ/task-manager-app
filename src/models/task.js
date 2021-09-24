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
});

module.exports = Task;
