const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  cart: {
    type: [
      {
        strainId: {
          type: mongoose.Types.ObjectId,
          ref: "Strain",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    required: true,
  },
  wishlist: {
    type: [mongoose.Types.ObjectId],
    ref: "Strain",
  },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  role: { type: String, default: "user", require: true },
  profilePicture: { type: String, required: false, default: "" },
});
userSchema.plugin(mongoosePaginate);

const User = mongoose.model("User", userSchema);

module.exports = User;
