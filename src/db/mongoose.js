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

//User Model
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

//a single user instance to enter using the model.
const me = new User({
  name: "Alex",
  age: 34,
});

//Saving the instance to the database
me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
