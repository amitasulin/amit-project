const { number } = require('joi');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const orderSchema = new mongoose.Schema ({
    products: String, 
    quantity: Number, 
    description: String,
    datetime: String,
    
});

orderSchema.plugin(mongoosePaginate);

const Order = mongoose.model('Order',orderSchema);


module.exports = Order;