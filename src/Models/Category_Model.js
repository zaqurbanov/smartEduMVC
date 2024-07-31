    const mongoose = require('mongoose');
    const slugify  = require('slugify');


    const Category_Model = new mongoose.Schema({

        name:{
            type:String,
            required:true,
            unique:true
        },
        slug:{
            type:String,
            unique:true
        }
    })


    Category_Model.pre("validate",function(next){
        this.slug = slugify(this.name,{
            trim:true,
            strict:true
        })

        next()
    })

    module.exports = mongoose.model('Category',Category_Model) 