const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new mongoose.Schema({
firstName: { type: String,required: true },
lastName: { type: String,required: true },
email: {type:String, unique:true, required: true},
password: { type: String,required: true },
role: {type:String, default:'user', required:true},
profilePicture: { type: String,required: false, default: ''}
});


userSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', userSchema);

module.exports = User;