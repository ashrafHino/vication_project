const mongoose = require('mongoose')


const signUpTemplate = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
},
{collection:'user-data'}
)
const modle=mongoose.model('user-data',signUpTemplate)
module.exports=modle
