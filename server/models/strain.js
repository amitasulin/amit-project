const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const strainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["Hybrid", "Indica", "Sativa"],
  },
  description: {
    type: String,
  },
  img_url: {
    type: String,
  },
  mostCommonTerpene: {
    type: String,
  },
  thcLevel: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  effects: {
    type: {
      name: {
        type: String,
        enum: ["Dizzy", "Happinness"],
      },
      value: Number,
    },
  },
  price: {
    type: Number,
    required: true,
  },
});

strainSchema.plugin(mongoosePaginate);

const Strain = mongoose.model("Strain", strainSchema);

module.exports = Strain;
