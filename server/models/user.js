const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" },
  profilePicture: { type: String, required: false, default: "" },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
