const mongoose = require('mongoose');

const strainsSchema = new mongoose.Schema ({
    name: String, 
    type: String,
    description: String,
    img_url: String,
    mostCommonTerpene: String,
    thcLevel: String
   
})

const Strain = mongoose.model('Strain',strainsSchema);
module.exports = Strain;