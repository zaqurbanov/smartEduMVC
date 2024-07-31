

const mongoose = require('mongoose');
const Role_Model = require('../Models/Role_Model');
const Response = require('../config/Response');

const getAllRoles = async ()=>{


    try {
        const result = await Role_Model.find(); 

        if(!result){
            return Response.error('No Roles Found',null,404);
        }

        return Response.success("good request",200,result)
    } catch (error) {
        return Response.error("Internal server Error",error,500);
    }
}

module.exports = {
    getAllRoles
}