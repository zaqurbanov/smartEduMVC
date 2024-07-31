const mongoose = require('mongoose');
const Role_Model = require('../Models/Role_Model');
const Response = require('../config/Response');
const roleService = require('../services/roleService')
const addRole =async (req,res)=>{

    const {name} = req.body;
    
    const result = await Role_Model.create({name})

    return res.status(201).json({
        result
    })
}



module.exports = {
    addRole,
    
}