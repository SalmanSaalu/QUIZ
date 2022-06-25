const mongoose = require('mongoose');
const {Schema} = mongoose;



const questionSchema = new Schema({
    number:Number,
    question: String,
    option1: String,
    option2:String,
    option3: String,
    option4:String,
    answer:String,
    username:String,
    questioncode:String
})

const Questions=mongoose.model('questions', questionSchema);
module.exports=Questions;