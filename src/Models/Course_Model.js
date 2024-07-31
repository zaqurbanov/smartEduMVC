const mongoose = require('mongoose');
const slugify  = require('slugify');
const Category_Model = require('./Category_Model');


const Course_Model = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        required:true,
        trim:true
        
    },
    description2:{
        type:String,
        required:true,
        trim:true
        
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref: 'Category'
    }, 
    
    slug:{
        type:String, 
        unique:true,
        required:true
    },
    author:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        

    }

 
},{timestamps:true})

Course_Model.pre("validate",function(next){

        this.slug = slugify(this.title,{
            trim:true,
            lower:true,
            strict:true

        })
        next();

})

module.exports = mongoose.model("Course",Course_Model)