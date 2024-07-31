

const mongoose = require('mongoose');



const User_Model = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,

    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,

    },
    userRole:{
        type:mongoose.Schema.ObjectId,
        ref:'Role',
       
    }


},{timestamps:true})


module.exports = mongoose.model('User',User_Model)