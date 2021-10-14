const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../../src/models/user");
const Task = require("../../src/models/task");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "Mike",
  email: "mike@example.com",
  password: "56what!!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_TOKEN),
    },
  ],
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoId,
  name: "Alex",
  email: "alex@example.com",
  password: "56what!!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_TOKEN),
    },
  ],
};

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  task: "First Task",
  description: "The first one",
  completed: false,
  owner: userOne._id,
};

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  task: "Second Task",
  description: "The second task",
  completed: true,
  owner: userTwo._id,
};

const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  task: "Third Task",
  description: "The third task",
  completed: true,
  owner: userOne._id,
};

const setUpDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  setUpDatabase,
  userOneId,
  userOne,
  setUpDatabase,
  userOneId,
  userOne,
  userTwo,
  userTwoId,
  taskOne,
  taskTwo,
  taskThree,
};
