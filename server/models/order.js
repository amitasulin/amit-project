const { number } = require("joi");
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const orderSchema = new mongoose.Schema({
  cart: {
    type: [
      {
        strainId: { type: mongoose.Types.ObjectId, ref: "Strain" },
        quantity: Number,
      },
    ],
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: Date,
});

orderSchema.plugin(mongoosePaginate);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
