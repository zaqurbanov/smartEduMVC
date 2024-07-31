const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/envoirment');
const userService = require('../services/userService')

const userRole = async (req,res,next)=>{

    const token = req.cookies.authUser;

    
    
    try {
        if(token){
            const verifyToken = jwt.verify(token,JWT_SECRET)
            if(verifyToken){
                const decodeToken = jwt.decode(token);
    
                const getUserByEmail = await userService.getUserByEmail(decodeToken.email)
                req.userRole = getUserByEmail.data.userRole.name
                
            }
            
        }
        next()
    } catch (error) {
        next()
    }
    
    
    
  
    
    
    
    
    
 

}

module.exports = userRole