const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    password: String,
    email: { type: String, unique: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
