const express = require("express");
const app = express();
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/tasks");

const port = process.env.PORT || 3000;

//MAINTENANCE MIDDLEWARE
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site is under maintenance, please try again later.");
// });
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Your Server Is Alive on port: " + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById("616032d5d12d5169e1210488");
//   // await task.populate("owner");
//   // console.log(task.owner);

//   const user = await User.findById("616032bdd12d5169e1210482");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };
// main();
