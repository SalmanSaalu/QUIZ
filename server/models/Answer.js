const mongoose = require('mongoose');
const {Schema} = mongoose;


const answerSchema = new Schema({
    answers: [{
        type: String
    }],
    questioncode:String,
    username:String
})
const Answer=mongoose.model('answers', answerSchema);
module.exports=Answer;