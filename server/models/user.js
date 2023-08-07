const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, require: true },
  role: { type: String, default: "user", require: true },
  profilePicture: { type: String, required: false, default: "" },
  wishlist: { type: mongoose.Types.ObjectId, ref: "Strain" },
  cart: { type: mongoose.Types.ObjectId, ref: "Strain" },
});

userSchema.plugin(mongoosePaginate);

const User = mongoose.model("User", userSchema);

module.exports = User;
