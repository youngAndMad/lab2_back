const User = require("../model/user.model");
const bcrypt = require("bcrypt");

const authenticate = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    console.log("invalid credentials during authenticate");
    return null;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log("invalid password during authenticate");
    return null;
  }
  return user;
};

module.exports = authenticate;
