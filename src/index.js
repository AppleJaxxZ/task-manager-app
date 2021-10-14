const app = require("./app");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Your Server Is Alive on port: " + port);
});
