const mongoose = require('mongoose');

const Counter_Model = new mongoose.Schema({
    students:{type:Number,
        default:0
    },
    courses:{type:Number,default:0},
    years:{type:Number,default:0},



})


module.exports = mongoose.model('Counter',Counter_Model)