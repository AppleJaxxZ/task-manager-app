const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error(
          "Email is invalid.  Please enter a valid email address."
        );
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("You cannot use 'password' as your password.");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age Must be a positive number");
      }
    },
  },
});

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});
//User Model
const User = mongoose.model("User", userSchema);

module.exports = User;
