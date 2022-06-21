
const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    username: String,
    email: String,
    password:String
})

const Message=mongoose.model('products', productSchema);
module.exports=Message;