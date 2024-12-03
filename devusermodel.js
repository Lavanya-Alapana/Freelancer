const mongoose=require('mongoose');
const devuser=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
   
    email:{
        type:String,
        required:true,
        uniqiue:true
    },
    mobile:{
        type:String,
        required:true
    },
    skill:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        require:true
    }



})

module.exports=mongoose.model('user',devuser);