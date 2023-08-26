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
  thcLevel: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
});

strainSchema.plugin(mongoosePaginate);

const Strain = mongoose.model("Strain", strainSchema);

module.exports = Strain;
