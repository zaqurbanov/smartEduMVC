const mongoose = require('mongoose');



const Role_Model = new mongoose.Schema({

    name:{
        type:String,
        
        },
        


})


module.exports = mongoose.model('Role',Role_Model)