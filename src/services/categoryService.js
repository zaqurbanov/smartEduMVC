const Response = require("../config/Response");
const Category_Model = require("../Models/Category_Model");



const createCategory = async (data)=>{

    try {
        if(!data || data ==""){
            return Response.error("please Full field all request",null,400);
        }
        
        const result = await Category_Model.create({
            name:data
        })
        
        if(!result){
            return Response.error("Created Failed",null,400);
        }
        return Response.success("reated Successfully",201,result);

    } catch (error) {
        Response.error('Internal Server Error',error,404)
    }

}

const getAllCategory = async()=>{
    try {
        const result  = await Category_Model.find();
        if(!result){
            return Response.error("Data not found",null,400);
        }
        return Response.success("Data response succesfully",200,result);
    } catch (error) {
        return Response.error("Internal Server Error",error,404);
    }
}
const getCategoryBySlug = async (slug)=>{

    try {
        const result = await Category_Model.findOne({slug})
        if(!result){
            return Response.error("category Not Found",null,400)
        }
        return Response.success("success",200,result);
    } catch (error) {
        return Response.error("internal Server Error",error,404)
    }

}

const getCategoryByName = async (name)=>{
  
    try {
        const result = await Category_Model.findOne({name})
        
        if(!result){
            return Response.error("category Not Found",null,400)
        }
        return Response.success("success",200,result);
    } catch (error) {
        return Response.error("internal Server Error",error,404)
    }
}

module.exports = {
    createCategory,
    getAllCategory,
    getCategoryBySlug,
    getCategoryByName
}