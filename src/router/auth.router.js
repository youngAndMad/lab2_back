const express = require("express");
const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
    });
    delete newUser.password;
    res.status(201).json(newUser);
  } catch (error) {
    res.json({ error: error.message });
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  res.json({ message: "Login successful" });
});

module.exports = authRouter;