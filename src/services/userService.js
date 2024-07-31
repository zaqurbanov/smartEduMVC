const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Response = require('../config/Response');
const User_Model = require('../Models/User_Model');
const { JWT_SECRET } = require('../config/envoirment');
const Role_Model = require('../Models/Role_Model');


const signUpUser = async(data)=>{

    try {
        
        if(data.name==""||data.password==""|| data.email==""|| !data.name || !data.password || !data.email){
            return Response.error("please Fullfield All requests",null,400)
        }
        let studentRole = await Role_Model.findOne({name:"student"}) 

        if(!studentRole){
            return Response.error("Role Note Found",null,400)
        }
        
        const hassPass = await bcrypt.hash(data.password,10);
        const result = await User_Model.create({
            name:data.name,
            password:hassPass,
            email:data.email,
            userRole:studentRole._id
            
        })
        
        return Response.success('CreatedSuccessfully',201,result)

    } catch (error) {
        return Response.error("Internal Server Error",error,404)
    }

}
const loginUser = async(email,password)=>{

    try {
        const user =await User_Model.findOne({email});
        if(!user){
            return Response.error(" Email or Password are not found",null,400);
        }
        const comaperePass = await bcrypt.compare(password,user.password);
        if(!comaperePass){
            return Response.error("Email or Password are not found",null,400);
        }
        const token = jwt.sign({email},JWT_SECRET,{expiresIn:60*60});
        

        return Response.success('Success User Account ',200,token)



    } catch (error) {
        
        return Response.error("Internal Server Error",error,404)
        
    }

}

const getUserByEmail =async(key)=>{

    try {
        const result = await User_Model.findOne({email:key}).populate('userRole')
        if(!result){
            return Response.error("User Not Found",null,400);
        }
        return Response.success("User by Key is Successfully",200,result)

    } catch (error) {
        Response.error('Internal Server Error',error,404)       
    }
} 

const getUserById = async (id) => { 
    try {
        const result = await User_Model.findById(id).populate('userRole');
        

        if(!result){
            return Response.error("User not Fond",null,404);
        }
        return Response.success("Successfully",200,result)
} catch (error) {
        return Response.error("Internal Server Error",error,500)
}
}
 const getAllUser =async ()=> {
        try {
                const result =await User_Model.find().populate('userRole');

                if(!result){
                    return Response.error("User not Fond",null,404);
                }
                return Response.success("Successfully",200,result)
        } catch (error) {
                return Response.error("Internal Server Error",error,500)
        }
 }
 const deleteUserById = async (id)=>{

    try {
        const user = await User_Model.findById(id);
        if(!user){
            return  Response.error("User not Fond",null,404);
        }

        const result = await User_Model.findByIdAndDelete(id);

        if(!result){
            return  Response.error("User not Fond",null,404);
        }
        return Response.success("deleted Successfully",200,result)
    } catch (error) {
        return Response.error("Internal Server Error",error,500)
        
    }
 }
 
 const updateUser = async(data)=>{

    try {
        const user = await User_Model.findById(id = data.id);
        
        if(!user){
            return  Response.error("User not Fond",null,404);
        }

        // data.password = data.password ? data.password : user.password;
        // data.name = data.name ? data.name : user.name,

        

        // await User_Model.findByIdAndUpdate({id: data.id}, data);

        const updatedData = {...user.data,...data}
        
      
        const result = await User_Model.findByIdAndUpdate(id = user._id ,updatedData)
        if(!result){
            return Response.error("Updated Failed",null,500)
        }

        return Response.success('User Updated Succesfully', 200, result);

    } catch (error) {
        return Response.error("Internal Server Error",error,500)

    }
 }

 const getUserDecode = async(token)=>{
    try {
    
    
        
        if(!token){
            return Response.error('Token Not Found',null,400);
        }
        const decodeToken = jwt.decode(token);

        if(decodeToken){
            return Response.success("TokenFound",200,decodeToken)
        }
     
        
    }
        
     catch (error) {
        Response.error("internal server Error",error,404)

     }
 }

 
module.exports = {
    signUpUser,
    loginUser,
    getUserByEmail,
    getAllUser,
    getUserById,
    deleteUserById,
    updateUser,
    getUserDecode
}
