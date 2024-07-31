const mongoose = require('mongoose');

const About_Content_Model = new mongoose.Schema({
    aboutHeader : {
        type:String,
        
    },
    aboutTag : {
        type:String,
         
    },
    aboutHead1 : {
        type:String,
        
    },
    aboutHead2 : {
        type:String,
        
    },
    aboutBody1 : {
        type:String,
        
    },
    aboutBody2 : {
        type:String,
        
    },
    aboutlink1 : {
        type:String,
        
    },
    aboutLink2 : {
        type:String,
        
    },



})

module.exports = mongoose.model("About_Model",About_Content_Model)