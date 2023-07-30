const { number } = require("joi");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const strainListSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    enum: ["wantToBuy", "alreadyBuyed"],
  },
  strainId: {
    type: ObjectId,
    ref: "Strain",
    required: true,
  },
  userId: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
});
const StrainList = mongoose.model("StrainList", strainListSchema);
module.exports = StrainList;
