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

const jwt = require("jsonwebtoken");
const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewapp", {
    expiresIn: "30 seconds",
  });
  console.log(token);

  const data = jwt.verify(token, "thisismynewapp");
  console.log(data);
};

myFunction();
