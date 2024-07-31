const jwt = require('jsonwebtoken');
const Response = require('../config/Response');


const GetDahsboardPageUser = async(token)=>{

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
    GetDahsboardPageUser
}