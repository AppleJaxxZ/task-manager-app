const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const auth = async (req, res, next) => {
  try {
    //takes the token from the Headers in our request and cutts out the "Bearer " string.
    const token = req.header("Authorization").replace("Bearer ", "");

    //decodes and verifies the user token against the servers token.
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    //finds the user with the user token still stored.

    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
