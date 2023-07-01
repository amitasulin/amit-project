const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const strainSchema = new mongoose.Schema ({
    name: String, 
    type: String,
    description: String,
    img_url: String,
    mostCommonTerpene: String,
    thcLevel: String
});

strainSchema.plugin(mongoosePaginate);

const Strain = mongoose.model('Strain',strainSchema);


module.exports = Strain;