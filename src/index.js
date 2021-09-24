const express = require("express");
const app = express();
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const port = process.env.PORT || 3000;

app.use(express.json());
//USERS ENDPOINTS
app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
  if (_id.length !== 24) {
    return res.status(400).send("User ID must be 24 characters long");
  }

  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

//TASK ENDPOINTS
app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;
  if (_id.length !== 24) {
    return res.status(400).send("User ID must be 24 characters long");
  }

  Task.findById(_id)
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});
app.listen(port, () => {
  console.log("Your Server Is Alive on port: " + port);
});
